import { NavigationContainer } from "@react-navigation/native";
import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";
import "@react-native-firebase/database";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

const LogoutScreen: () => React$Node = ({ navigation }) => {
  let secondInput;

  let [userEmail, setUserEmail] = useState("");
  let [userPw, setUserPw] = useState("");

  let [emailErrorCode, setEmailErrorCode] = useState(" ");
  let [pwErrorCode, setPwErrorCode] = useState(" ");

  function login() {
    setEmailErrorCode(" ");
    setPwErrorCode(" ");

    if (userEmail == "") {
      setEmailErrorCode("이메일을 입력해주세요!");
    }
    if (userPw == "") {
      setPwErrorCode("비밀번호를 입력해주세요!");
    }
    if (userEmail != "" && userPw != "") {
      firebase
        .auth()
        .signInWithEmailAndPassword(userEmail, userPw)
        .then(() => {
          console.log("로그인 성공!");
          navigation.navigate("Home");
        })
        .catch((error) => {
          if (error.code === "auth/invalid-email") {
            setEmailErrorCode("이메일 주소의 형식이 잘못되었습니다!");
          }

          if (error.code === "auth/user-not-found") {
            setEmailErrorCode("가입되지 않은 이메일입니다!");
          }

          if (error.code === "auth/wrong-password") {
            setPwErrorCode("잘못된 비밀번호입니다!");
          }

          console.error(error);
        });
    }
  }
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            height: "30%",
            alignItems: "center",
          }}>
          <View
            style={{
              flex: 1,
              width: "70%",
              alignItems: "baseline",
              justifyContent: "center",
              // backgroundColor: "red",
            }}>
            <Image
              source={require("../image/loginlogo.png")}
              style={{ marginTop: "20%", width: "60%", resizeMode: "contain" }}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.inputForm}>
            <TextInput
              style={styles.textInput}
              placeholder="이메일"
              placeholderTextColor="#808080"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => secondInput.focus()}
              blurOnSubmit={false}
              value={userEmail}
              onChangeText={(text) => setUserEmail(text)}
            />
            <Text style={styles.errorCode}>{emailErrorCode}</Text>
            <TextInput
              style={styles.textInput}
              placeholder="비밀번호"
              placeholderTextColor="#808080"
              autoCapitalize="none"
              secureTextEntry={true}
              ref={(input) => (secondInput = input)}
              returnKeyType="done"
              value={userPw}
              onChangeText={(text) => setUserPw(text)}
            />
            <Text style={styles.errorCode}>{pwErrorCode}</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={login}>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
                로그인
              </Text>
            </TouchableOpacity>
            <View style={styles.textArea}>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.registerText}>
                  랜드마크가 처음? 회원가입하기!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputForm: {
    height: "70%",
    alignItems: "center",
  },
  textInput: {
    width: "70%",
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#1c1c1c",
    paddingLeft: "5%",
  },
  loginBtn: {
    width: "70%",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#1c1c1c",
  },
  textArea: {
    width: "70%",
  },
  registerText: {
    marginTop: 20,
    marginLeft: 5,
    color: "#808080",
    textDecorationLine: "underline",
  },
  errorCode: {
    color: "red",
    marginTop: 3,
    marginBottom: 3,
  },
});

export default LogoutScreen;

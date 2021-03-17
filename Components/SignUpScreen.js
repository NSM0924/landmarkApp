import { NavigationContainer } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

const LogoutScreen: () => React$Node = ({ navigation }) => {
  let secondInput;

  let [userEmail, setUserEmail] = useState("");
  let [userPw, setUserPw] = useState("");
  // console.log(userEmail);
  // console.log(userPw);

  function signUp() {
    if (userEmail == "") {
      alert("이메일을 입력해주세요!");
    } else if (userPw == "") {
      alert("비밀번호를 입력해주세요!");
    } else {
      auth()
        .createUserWithEmailAndPassword(userEmail, userPw)
        .then(() => {
          alert("성공");
          console.log("User account created & signed in!");
          navigation.navigate("Login");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            alert("이미 사용 중인 이메일 주소입니다!");
            console.log("That email address is already in use!");
          }

          if (error.code === "auth/invalid-email") {
            alert("이메일 주소의 형식이 잘못되었습니다!");
            console.log("That email address is already in use!");
          }

          // if (error.code === "auth/invalid-email") {
          //   alert("유효하지 않는 이메일 주소입니다!");
          //   console.log("That email address is invalid!");
          // }

          if (error.code === "auth/weak-password") {
            alert("6자 이상의 비밀번호를 입력해주세요!");
          }

          console.error(error);
        });
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={{ height: "30%", alignItems: "center" }}>
          <View
            style={{
              flex: 1,
              width: "70%",
              alignItems: "baseline",
              justifyContent: "center",
              // backgroundColor: "red",
            }}>
            <Image
              source={require("../image/signuplogo.png")}
              style={{ marginTop: "20%", width: "70%", resizeMode: "contain" }}
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
              blurOnSubmit={false}
              onSubmitEditing={() => secondInput.focus()}
              value={userEmail}
              onChangeText={(text) => setUserEmail(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="비밀번호"
              placeholderTextColor="#808080"
              autoCapitalize="none"
              returnKeyType="done"
              secureTextEntry={true}
              ref={(input) => (secondInput = input)}
              value={userPw}
              onChangeText={(text) => setUserPw(text)}
            />
            <TouchableOpacity style={styles.loginBtn} onPress={signUp}>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
                회원가입
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{ flex: 1.5 }} /> */}
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
    marginBottom: 15,
  },
  loginBtn: {
    width: "70%",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#1c1c1c",
  },
});

export default LogoutScreen;

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

const RegisterScreen: () => React$Node = ({ navigation }) => {
  let secondInput;
  let thirdInput;

  let [userEmail, setUserEmail] = useState("");
  let [userNickname, setUserNickname] = useState("");
  let [userPw, setUserPw] = useState("");
  let pwCheck = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;
  let nickCheck = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\" ]/gi;

  let [emailErrorCode, setEmailErrorCode] = useState(" ");
  let [nickErrorCode, setNickErrorCode] = useState(" ");
  let [pwErrorCode, setPwErrorCode] = useState(" ");

  function register() {
    setEmailErrorCode(" ");
    setNickErrorCode(" ");
    setPwErrorCode(" ");

    if (userEmail == "") {
      setEmailErrorCode("이메일을 입력해주세요!");
    }
    if (userNickname == "") {
      setNickErrorCode("닉네임을 입력해주세요!");
    }
    if (nickCheck.test(userNickname)) {
      setNickErrorCode("사용할 수 없는 문자가 있습니다!");
    }
    if (userPw == "") {
      setPwErrorCode("비밀번호를 입력해주세요!");
    }
    if (!pwCheck.test(userPw)) {
      setPwErrorCode("8~16자리 영문, 숫자를 사용하세요!");
    }
    if (
      userEmail != "" &&
      userNickname != "" &&
      !nickCheck.test(userNickname) &&
      userPw != "" &&
      pwCheck.test(userPw)
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(userEmail, userPw)
        .then((res) => {
          firebase
            .database()
            .ref("users/" + res.user.uid)
            .set({
              nickName: userNickname,
              profileImg:
                "https://firebasestorage.googleapis.com/v0/b/landmark-8044c.appspot.com/o/normalProfileImg.png?alt=media&token=3408b136-a71c-481f-b547-ff04ab46dfa0",
            });
          navigation.navigate("Home");
          console.log("User account created & signed in!");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setEmailErrorCode("이미 사용 중인 이메일 주소입니다!");
            console.log("That email address is already in use!");
          }

          if (error.code === "auth/invalid-email") {
            setEmailErrorCode("이메일 주소의 형식이 잘못되었습니다!");
            console.log("That email address is already in use!");
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
              source={require("../image/registerlogo.png")}
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
            <Text style={styles.errorCode}>{emailErrorCode}</Text>
            <TextInput
              style={styles.textInput}
              placeholder="닉네임(띄어쓰기, 특수문자 X)"
              placeholderTextColor="#808080"
              autoCapitalize="none"
              returnKeyType="next"
              maxLength={7}
              blurOnSubmit={false}
              ref={(input) => (secondInput = input)}
              onSubmitEditing={() => thirdInput.focus()}
              value={userNickname}
              onChangeText={(text) => setUserNickname(text)}
            />
            <Text style={styles.errorCode}>{nickErrorCode}</Text>
            <TextInput
              style={styles.textInput}
              placeholder="비밀번호(8~16자리 영문, 숫자)"
              placeholderTextColor="#808080"
              autoCapitalize="none"
              returnKeyType="done"
              maxLength={16}
              secureTextEntry={true}
              ref={(input) => (thirdInput = input)}
              value={userPw}
              onChangeText={(text) => setUserPw(text)}
            />
            <Text style={styles.errorCode}>{pwErrorCode}</Text>
            <TouchableOpacity style={styles.registerBtn} onPress={register}>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
                회원가입
              </Text>
            </TouchableOpacity>
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
  registerBtn: {
    width: "70%",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#1c1c1c",
  },
  errorCode: {
    color: "red",
    marginTop: 3,
    marginBottom: 3,
  },
});

export default RegisterScreen;

import { NavigationContainer } from "@react-navigation/native";
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
              source={require("../image/loginlogo.png")}
              style={{ marginTop: "20%", width: "60%", resizeMode: "contain" }}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.inputForm}>
            <TextInput
              style={styles.textInput}
              placeholder="아이디"
              placeholderTextColor="#808080"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => secondInput.focus()}
              blurOnSubmit={false}
              autoFocus={true}
            />
            <TextInput
              style={styles.textInput}
              placeholder="비밀번호"
              placeholderTextColor="#808080"
              autoCapitalize="none"
              secureTextEntry={true}
              ref={(input) => (secondInput = input)}
              returnKeyType="go"
            />
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => navigation.navigate("MainTab")}>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
                로그인
              </Text>
            </TouchableOpacity>
            <View style={styles.textArea}>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.signupText}>
                  랜드마크가 처음? 회원가입하기!
                </Text>
              </TouchableOpacity>
            </View>
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
  textArea: {
    width: "70%",
  },
  signupText: {
    marginTop: 20,
    marginLeft: 5,
    color: "#808080",
    textDecorationLine: "underline",
  },
});

export default LogoutScreen;

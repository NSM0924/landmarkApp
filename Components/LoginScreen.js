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
  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: "center" }}>
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
              style={{ marginTop: "25%", width: "60%", resizeMode: "contain" }}
            />
            {/* <Text>로그인하여 나만의 랜드마크를 알려주세요</Text> */}
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
            />
            <TextInput
              style={styles.textInput}
              placeholder="비밀번호"
              placeholderTextColor="#808080"
              autoCapitalize="none"
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.loginBtn}>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
                로그인
              </Text>
            </TouchableOpacity>
            <View style={styles.textArea}>
              <Text style={styles.signupText} onPress={""}>
                랜드마크가 처음? 회원가입하기!
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1.5 }} />
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
    width: "60%",
  },
  signupText: {
    marginTop: 20,
    marginLeft: 5,
    color: "#808080",
    textDecorationLine: "underline",
  },
});

export default LogoutScreen;

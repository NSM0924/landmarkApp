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
  let thirdInput;

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
            />
            <TextInput
              style={styles.textInput}
              placeholder="아이디"
              placeholderTextColor="#808080"
              autoCapitalize="none"
              returnKeyType="next"
              blurOnSubmit={false}
              ref={(input) => (secondInput = input)}
              onSubmitEditing={() => thirdInput.focus()}
            />
            <TextInput
              style={styles.textInput}
              placeholder="비밀번호"
              placeholderTextColor="#808080"
              autoCapitalize="none"
              returnKeyType="done"
              secureTextEntry={true}
              ref={(input) => (thirdInput = input)}
            />
            <TouchableOpacity style={styles.loginBtn}>
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

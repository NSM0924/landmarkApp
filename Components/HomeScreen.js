import React, { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  BackHandler,
} from "react-native";

const HomeScreen: () => React$Node = ({ navigation }) => {
  //   useEffect(() => {
  //     const backAction = () => {
  //       return true;
  //     };
  //     const backHandler = BackHandler.addEventListener(
  //       "hardwareBackPress",
  //       backAction
  //     );
  //   }, []);

  function logout() {
    auth()
      .signOut()
      .then(() => {
        console.log("User signed out!");
        navigation.navigate("Logout");
      });
  }

  return (
    <View style={styles.container}>
      <Text>홈</Text>
      <TouchableOpacity onPress={logout}>
        <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
          로그아웃
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;

import auth from "@react-native-firebase/auth";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const AccountScreen: () => React$Node = ({ navigation }) => {
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
      <Text>계정/설정</Text>
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
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AccountScreen;

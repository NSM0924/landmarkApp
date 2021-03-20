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

const HomeScreen: () => React$Node = () => {
  //   useEffect(() => {
  //     const backAction = () => {
  //       return true;
  //     };
  //     const backHandler = BackHandler.addEventListener(
  //       "hardwareBackPress",
  //       backAction
  //     );
  //   }, []);

  return (
    <View style={styles.container}>
      <Text>홈</Text>
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

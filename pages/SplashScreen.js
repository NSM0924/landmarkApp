import React, { useState, useEffect, version } from "react";
import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";
import "@react-native-firebase/database";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  BackHandler,
  ActivityIndicator,
} from "react-native";

const SplashScreen: () => React$Node = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          navigation.navigate("MainTab");
        } else {
          navigation.navigate("Logout");
        }
      });
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../image/mainlogo.png")}
        style={{ width: "80%", resizeMode: "contain", position: "relative" }}
      />
      <ActivityIndicator
        animating={animating}
        color="#4BBCF4"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  activityIndicator: {
    alignItems: "center",
    zIndex: 10,
    position: "absolute",
    bottom: "20%",
  },
});

export default SplashScreen;

import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-community/google-signin";

GoogleSignin.configure({
  webClientId:
    "1036893411403-hqh7fk1qjmqikr2lrjr6v0ldi2bsbo1e.apps.googleusercontent.com",
});

const GoogleLogin: () => React$Node = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    getCurrentUserInfo();
  }, []);
  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log(userInfo);
      setIsLoggedIn(true);
      setUserInfo(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log("a");
      } else {
        console.log("b");
      }
    }
  };

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      setIsLoggedIn(true);
      setUserInfo(userInfo);
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("c");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("d");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("e");
      } else {
        console.log("f");
      }
    }
  };

  const _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={_signIn}
        />
      ) : (
        <>
          <Text>Email: {userInfo ? userInfo.user.email : ""}</Text>
          <Text>Name: {userInfo ? userInfo.user.name : ""}</Text>
          <TouchableOpacity style={styles.signOutBtn} onPress={_signOut}>
            <Text style={styles.signOutBtnText}>Signout</Text>
          </TouchableOpacity>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  signOutBtn: {
    backgroundColor: "#556688",
    padding: 10,
    borderRadius: 10,
  },
  signOutBtnText: {
    color: "white",
  },
});

export default GoogleLogin;

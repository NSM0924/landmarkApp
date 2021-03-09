/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import LogoutScreen from "./Components/LogoutScreen";
import LoginTapScreen from "./Components/LoginTapScreen";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Logout"
            component={LogoutScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginTap"
            component={LoginTapScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import auth from "@react-native-firebase/auth";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, BackHandler } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import LogoutScreen from "./pages/LogoutScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import HomeScreen from "./pages/HomeScreen";
import SearchScreen from "./pages/SearchScreen";
import FavoritesScreen from "./pages/FavoritesScreen";
import AccountScreen from "./pages/AccountScreen";
import WriteScreen from "./pages/WriteScreen";
import SplashScreen from "./pages/SplashScreen";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BackBtn() {
  return (
    <Icon
      name="left"
      color={"#1c1c1c"}
      size={25}
      style={{ marginLeft: 10, width: 22, height: 22 }}
    />
  );
}

const MainTab = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search1" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Write"
        component={WriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="form" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="staro" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Logout"
            component={LogoutScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "",
              headerBackTitleVisible: false,
              headerBackImage: BackBtn,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              title: "",
              headerBackTitleVisible: false,
              headerBackImage: BackBtn,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

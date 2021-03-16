/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, BackHandler } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import LogoutScreen from "./Components/LogoutScreen";
import LoginScreen from "./Components/LoginScreen";
import SignUpScreen from "./Components/SignUpScreen";
import HomeScreen from "./Components/HomeScreen";
import SearchScreen from "./Components/SearchScreen";
import FavoritesScreen from "./Components/FavoritesScreen";
import AccountScreen from "./Components/AccountScreen";
import WriteScreen from "./Components/WriteScreen";

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

const MainTab = () => {
  return (
    <Tab.Navigator
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
        <Stack.Navigator>
          <Stack.Screen
            name="Logout"
            component={LogoutScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            // options={{ headerShown: false }}
            options={{
              title: "",
              headerBackTitleVisible: false,
              headerBackImage: BackBtn,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            // options={{ headerShown: false }}
            options={{
              title: "",
              headerBackTitleVisible: false,
              headerBackImage: BackBtn,
            }}
          />
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

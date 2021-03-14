import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const AccountScreen: () => React$Node = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>계정/설정</Text>
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

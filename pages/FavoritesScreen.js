import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const FavoritesScreen: () => React$Node = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>즐겨찾기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;

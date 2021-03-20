import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const SearchScreen: () => React$Node = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>검색</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchScreen;

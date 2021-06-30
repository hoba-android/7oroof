import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Intro from "./src/screens/BookDetails";

export default function App() {
  return (
    <View style={styles.container}>
      <Intro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
});

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containers}>
        <Text style={styles.introText}>Mommy and Me App</Text>
      </View>
      <View style={styles.containers}>
        <Image
          style={styles.introImage}
          source={require("./assets/images/Lae.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingTop: 64,
    justifyContent: "center",
    backgroundColor: "#ca9bf7",
  },
  introText: {
    fontSize: 50,
    textAlign: "center",
    alignSelf: "flex-start",
    color: "white",
    width: "100%",
  },
  introImage: {
    width: 300,
    height: 300,
  },
  containers: {
    flex: 2,
  },
});

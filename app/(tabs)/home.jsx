import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { Link, router } from "expo-router";
import { Colors } from "../../constants/Colors.ts";
import { Ionicons } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "expo-router";

export default function home() {
  const auth = getAuth();
  const navigation = useNavigation();

  const signUserOut = async () => {
    console.log("signed out");
    try {
      await signOut(auth).then(() => {
        navigation.replace("index");
      });
    } catch (e) {
      console.log("Error Signing Out: ", e);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <Text style={styles.header}>Welcome</Text>
        <Button mode="text" onPress={signUserOut} maxFontSizeMultiplier="1">
          <Ionicons name="person-outline" />
          <Text
            style={{
              alignSelf: "center",
              marginLeft: 5,
            }}
          >
            Sign Out
          </Text>
        </Button>
      </View>
      <View style={styles.banner}>
        <Text style={styles.emph}>Portfolio keeper</Text>
        <Text style={styles.text}>An archive for your hard work</Text>
      </View>
      <Link href="/add" style={styles.btn}>
        Add works..
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: "15%",
    backgroundColor: Colors.base.pink.lightest,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 30,
    color: Colors.base.yellow.darkest,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emph: {
    fontSize: 24,
    fontStyle: "italic",
    color: Colors.base.pink.darkest,
  },
  text: {
    color: Colors.base.blue.darkest,
    fontSize: 14,
  },
  banner: {
    height: 60,
    alignSelf: "center",
  },
  btn: {
    backgroundColor: Colors.base.pink.dark,
    color: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 50,
  },
});

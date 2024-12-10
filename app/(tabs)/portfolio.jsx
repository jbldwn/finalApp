import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { Link, router } from "expo-router";
import { Colors } from "../../constants/Colors.ts";
import { Ionicons } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "expo-router";

export default function portfolio() {
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
        <Text style={styles.header}>Best of works</Text>
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
      <View style={styles.borderDetail}>
        <Text style={styles.emph}>Project Title</Text>
        <Text style={styles.text}>tools listed here</Text>

        <View style={styles.details}>
          <Image
            style={{
              height: 50,
              width: 200,
              backgroundColor: "red",
              alignSelf: "center",
              marginVertical: 15,
            }}
            source={{
              uri: "https://d2zp5xs5cp8zlg.cloudfront.net/image-61785-800.jpg",
            }}
          />
          <View style={styles.row}>
            <Button
              textColor={"#fff"}
              buttonColor={Colors.base.pink.dark}
              style={styles.btn}
            >
              Active Site
            </Button>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                width: 75,
              }}
            >
              <Link href="google.com" style={styles.inputHalf}>
                figma
              </Link>
              <Text> | </Text>
              <Link href="ynab.com" style={styles.inputHalf}>
                Git
              </Link>
            </View>
          </View>

          <Text style={styles.input}>A description of project goals</Text>
        </View>
      </View>
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
  borderDetail: {
    /* Border style */
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: Colors.base.pink.darkest,
    paddingHorizontal: "5%",
  },
  input: {
    marginVertical: 5,
    width: "100%",
  },
  inputHalf: {
    width: "47%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  details: {
    paddingVertical: 30,
    paddingHorizontal: 10,
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

    /* aligned to Upper Left */
    alignSelf: "flex-start",
    marginTop: -30,

    /* Border "spacing" style */
    backgroundColor: Colors.base.pink.lightest,
    paddingHorizontal: 8,
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
    // backgroundColor: Colors.base.pink.dark,
    // color: "#fff",
    // paddingVertical: 15,
    // paddingHorizontal: 30,
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 50,
  },
});

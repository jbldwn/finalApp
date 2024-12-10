import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors.ts";
import { Button, TextInput } from "react-native-paper";
import { db } from "../../FirebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

export default function add() {
  const [title, setTitle] = useState("");
  const [site, setSite] = useState("");
  const [git, setGit] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [tools, setTools] = useState("");
  const [author, setAuthor] = useState("");

  const addProject = async () => {
    const projectObj = {
      title: title,
      site: site,
      git: git,
      synopsis: synopsis,
      tools: tools.split(" "),
    };

    try {
      const docRef = await addDoc(collection(db, "portfolio"), projectObj);

      console.log("Project ID: ", docRef.id);
      router.replace("/(tabs)/portfolio");
    } catch (e) {
      console.log("error adding document: ", e.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.borderDetail}>
        <Text style={styles.header}>New Details</Text>
        <Text style={styles.text}>contrats on your latest hardwork</Text>

        <View style={styles.details}>
          <TextInput
            label="Project Title"
            mode="outlined"
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="default"
          />

          <View style={styles.row}>
            <TextInput
              label="Active Site"
              mode="outlined"
              value={site}
              onChangeText={(text) => setSite(text)}
              style={styles.inputHalf}
              autoCapitalize="none"
              keyboardType="default"
            />

            <TextInput
              label="GitHub Repo"
              mode="outlined"
              value={git}
              onChangeText={(text) => setGit(text)}
              style={styles.inputHalf}
              autoCapitalize="none"
              keyboardType="default"
            />
          </View>

          <TextInput
            label="A description of the project goal"
            mode="outlined"
            value={synopsis}
            onChangeText={(text) => setSynopsis(text)}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="default"
          />

          <TextInput
            label="List tools and languages used"
            mode="outlined"
            value={tools}
            onChangeText={(text) => setTools(text)}
            style={styles.input}
            keyboardType="default"
          />
        </View>
      </View>
      <Button
        mode="contained"
        style={styles.btn}
        onPress={addProject}
        textColor={"#fff"}
        buttonColor={Colors.base.pink.dark}
      >
        Add Showpiece
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.base.pink.lightest,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    color: Colors.base.yellow.darkest,

    /* aligned to Upper Left */
    alignSelf: "flex-start",
    marginTop: -30,

    /* Border "spacing" style */
    backgroundColor: Colors.base.pink.lightest,
    paddingHorizontal: 8,
  },
  emph: {
    fontSize: 24,
    fontStyle: "italic",
    color: Colors.base.pink.darkest,
    backgroundColor: "purple",
  },
  text: {
    color: Colors.base.blue.darkest,
    fontSize: 14,
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
  btn: {
    /* aligned to Lower Right */
    alignSelf: "flex-end",
    marginTop: -30,
    marginHorizontal: 30,
    // marginBottom: -35,
    borderRadius: 50,

    /* Border style */
    borderStyle: "solid",
    borderWidth: 8,
    borderColor: Colors.base.pink.lightest,
  },
});

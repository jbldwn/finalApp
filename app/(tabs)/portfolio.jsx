import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { Link, router } from "expo-router";
import { Colors } from "../../constants/Colors.ts";
import { Ionicons } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "expo-router";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/FirebaseConfig";

export default function portfolio() {
  const auth = getAuth();
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const editProject = (id) => {
    console.log("edit project", id);
  };

  const deleteProject = async (id) => {
    console.log("delete", id);
    try {
      await deleteDoc(doc(db, "portfolio", id));
      compilePortfolio();
    } catch (e) {
      console.error("Error deleting document: ", e.message);
    }
  };

  // const saveEdit = async (id) => {
  //   const projectObj = {
  //     title: title,
  //     site: site,
  //     git: git,
  //     synopsis: synopsis,
  //     tools: tools.split(" "),
  //   };

  //   console.log("edit", id);
  //   try {
  //     const docRef = await updateDoc(collection(db, "portfolio"), projectObj);

  //     console.log("Project ID: ", docRef.id);
  //     router.replace("/(tabs)/portfolio");
  //   } catch (e) {
  //     console.error("Error deleting document: ", e.message);
  //   }
  // };

  const compilePortfolio = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "portfolio"));
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
        console.log(doc.id, " => ", doc.data());
      });
      setData(docs);
    } catch (e) {
      console.error("Error getting documents: ", e.message);
    }
  };

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
    <View style={styles.container} onLayout={() => compilePortfolio()}>
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
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.borderDetail} id={item.id}>
            <Text style={styles.emph}>{item.title}</Text>
            <View style={styles.rowTop}>
              <View style={styles.tools}>
                <Text style={styles.text}>{item.tools}</Text>
                {/* <FlatList
                  data={item.tools}
                  renderItem={({ item }) => {
                    return <Text style={styles.text}>{item}</Text>;
                  }}
                  keyExtractor={(item) => item}
                /> */}
              </View>
              <Button mode="text" onPress={() => deleteProject(item.id)}>
                <Ionicons name="trash-bin-outline" />
                <Text
                  style={{
                    alignSelf: "center",
                    marginLeft: 5,
                  }}
                >
                  Delete
                </Text>
              </Button>
              {/* <Button mode="text" onPress={() => editProject(item.id)}>
                <Ionicons name="pencil-outline" />
                <Text
                  style={{
                    alignSelf: "center",
                    marginLeft: 5,
                  }}
                >
                  Edit
                </Text>
              </Button> */}
            </View>
            <View style={styles.details}>
              {/* <Image
                style={styles.image}
                source={{
                  uri: "https://icatcare.org/app/uploads/2018/07/Helping-your-new-cat-or-kitten-settle-in-1.png",
                }}
              /> */}
              <View style={styles.row}>
                <Button
                  textColor={"#fff"}
                  buttonColor={Colors.base.pink.dark}
                  style={styles.btn}
                  href={item.active}
                  target="_blank"
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
                  <Link
                    href={item.git}
                    target="_blank"
                    style={styles.inputHalf}
                  >
                    Git
                  </Link>
                </View>
              </View>

              <Text style={styles.input}>{item.synopsis}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: "8%",
    backgroundColor: Colors.base.pink.lightest,
    // flexDirection: "column",
    // justifyContent: "space-between",
  },
  borderDetail: {
    marginVertical: 30,
    /* Border style */
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: Colors.base.pink.darkest,
    paddingHorizontal: "5%",
  },
  image: {
    marginBottom: 10,
    width: 300,
    maxWidth: "100%",
    height: 125,
    borderRadius: 15,
    alignSelf: "center",
  },
  input: {
    marginVertical: 5,
  },
  row: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    maxWidth: "100%",
  },
  rowTop: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  details: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 30,
    color: Colors.base.yellow.darkest,
  },
  tools: {
    // width: "50%",
    // flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    // flexDirection: "column",
    marginTop: 15,
    // backgroundColor: "red",
    // lineHeight: 10,
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
    flex: 1,
    color: Colors.base.blue.darkest,
    fontSize: 14,
    marginRight: 15,
    flexWrap: "wrap",
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

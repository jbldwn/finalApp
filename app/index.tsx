import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Colors } from "../constants/Colors";
import { auth } from "../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = async () => {
    // console.log("created account");
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/(tabs)/home");
    } catch (err) {
      console.log(err);
      // alert("Failed to create account" + err);
      alert("Failed to create account" + err);
    }
  };

  const signIn = async () => {
    console.log("Signed in");
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/(tabs)/home");
    } catch (err) {
      console.log(err);
      alert("Failed to Sign In" + err);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 50 }}>
        <Text style={styles.header}>Portfolio keeper</Text>
        <Text style={styles.text}>An archive for your hard work</Text>
      </View>

      <View style={styles.borderDetail}>
        <View style={styles.inputs}>
          <TextInput
            style={{ marginBottom: 15 }}
            mode="outlined"
            autoCapitalize="none"
            value={email}
            keyboardType="email-address"
            placeholder="Email address..."
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            mode="outlined"
            autoCapitalize="none"
            value={password}
            secureTextEntry={true}
            placeholder="password..."
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>
      <View style={styles.row}>
        <Button
          mode="contained"
          buttonColor={Colors.base.pink.dark}
          textColor="#fff"
          style={styles.btn}
          onPress={createAccount}
        >
          Create Account
        </Button>
        <Button
          mode="contained"
          buttonColor={Colors.base.pink.dark}
          textColor="#fff"
          style={styles.btn}
          onPress={signIn}
        >
          Sign In
        </Button>
      </View>
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
  btn: {
    // width: 175,
    borderRadius: 50,
    /* Border style */
    borderStyle: "solid",
    borderWidth: 8,
    borderColor: Colors.base.pink.lightest,
  },
  emph: {
    width: "80%",

    fontSize: 24,
    fontStyle: "italic",
    color: Colors.base.pink.darkest,

    /* aligned to "break" border */
    marginBottom: -15,

    /* Border "spacing" style */
    // backgroundColor: Colors.base.pink.lightest,
    // backgroundColor: "#FFEAF2",
    backgroundColor: "red",
    marginHorizontal: 8,
    textAlign: "center",
  },
  text: {
    color: Colors.base.blue.darkest,
    fontSize: 14,
  },
  borderDetail: {
    height: 225,
    paddingHorizontal: 60,
    paddingVertical: 40,
    /* Border style */
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: Colors.base.pink.darkest,
    // justifyContent: "center",
    // alignItems: "center",
    alignContent: "center",
  },
  header: {
    fontSize: 30,
    color: Colors.base.yellow.darkest,
  },
  inputs: {
    flexDirection: "column",
    width: 215,
  },
  row: {
    flexDirection: "row",
    marginTop: -30,
  },
});

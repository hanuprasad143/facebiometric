import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import Home from "./home";

export default function Login({ navigation }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [fontsLoaded] = useFonts({
    CustomFont: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  // const { width } = useWindowDimensions();
  // const isTablet = width >= 768 && width < 1024;
  // const isLargeDevice = width >= 1024;
  // const fontSize = isLargeDevice ? 50 : isTablet ? 45 : 35;
  // const textTopMargin = isLargeDevice ? 80 : isTablet ? 70 : 50;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              style={styles.headerImg}
              source={require("../facebiometric/assets/logo_transparent.png")}
            />
            <View>
              <Text
                style={{
                  fontFamily: "CustomFont",
                  fontSize: 50,
                  fontWeight: "bold",
                  color: "#790D4D",
                  marginTop: 5,
                }}
              >
                LoGoJeCh
              </Text>

              <Text
                style={{
                  fontFamily: "CustomFont",
                  fontSize: 20,
                  color: "#2D0202",
                  marginLeft: 10,
                }}
              >
                Technologies
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.subhead}>
              Civil Supplies AP Hackathon Challenges
            </Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.inputheader}>Login</Text>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Mobile Number</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                onChangeText={(email) => setForm({ ...form, email })}
                placeholder="enter your mobile number"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>

              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={(password) => setForm({ ...form, password })}
                placeholder="enter your password"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password}
              />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign in</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Image
              alt="App Logo"
              resizeMode="contain"
              style={styles.headerImg}
              source={require("../facebiometric/assets/ap_logo-removebg-preview.png")}
            />
          </View>
        </View>

        {/* <TouchableOpacity
        onPress={() => {
          // handle link
        }}
      >
        <Text style={styles.formFooter}>
          Don't have an account?{" "}
          <Text style={{ textDecorationLine: "underline" }}>Sign up</Text>
        </Text>
      </TouchableOpacity> */}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    padding: 24,
  },
  // title: {
  //   fontSize: 31,
  //   fontWeight: "700",
  //   color: "#1D2A32",
  //   marginBottom: 6,
  // },
  // subtitle: {
  //   fontSize: 15,
  //   fontWeight: "500",
  //   color: "#929292",
  // },
  /** Header */
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 36,
    flexDirection: "row",
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 36,
    marginTop: 40,
  },

  subhead: {
    textAlign: "center",
    fontFamily: "customfont",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
    color: "#2D0202",
    textDecorationLine: "underline",
  },
  /** Form */
  form: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: "600",
    color: "#075eec",
    textAlign: "center",
  },
  formFooter: {
    paddingVertical: 24,
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
    letterSpacing: 0.15,
  },
  /** Input */
  inputheader: {
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
    color: "#790D4D",
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    borderWidth: 1,
    borderColor: "#C9D3DB",
    borderStyle: "solid",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#790D4D",
    borderColor: "#790D4D",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
});

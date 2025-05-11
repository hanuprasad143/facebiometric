import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";
import RegisterFaces from "./registerfaces";

export default function Home({ navigation }) {
  const [fontsLoaded] = useFonts({
    CustomFont: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const { width } = useWindowDimensions();
  const isTablet = width >= 768 && width < 1024;
  const isLargeDevice = width >= 1024;
  const gridtextsize = isLargeDevice ? 36 : isTablet ? 28 : 15;
  const profilename = isLargeDevice ? 36 : isTablet ? 30 : 15;
  const profileHeight = isLargeDevice ? 140 : isTablet ? 100 : 80;
  const profileWidth = isLargeDevice ? 140 : isTablet ? 100 : 80;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
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
          <View style={styles.profileview}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              style={[
                styles.profileImg,
                { height: profileHeight },
                { width: profileWidth },
              ]}
              source={require("../facebiometric/assets/anand.jpg")}
            />
            <Text style={[styles.profiletext, { fontSize: profilename }]}>
              Hello Anand Uppada
            </Text>
          </View>
          <View style={styles.homecontainer}>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => {
                navigation.navigate("register");
              }}
            >
              <Icon name="user" size={30} color="#2C64E3" />
              <Text style={{ fontSize: gridtextsize, textAlign: "center" }}>
                Register Faces
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => {
                navigation.navigate("Recognition");
              }}
            >
              <Icon name="user-secret" size={30} color="#2C64E3" />
              <Text style={{ fontSize: gridtextsize, textAlign: "center" }}>
                Face Recognition Analysis
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
              <Icon name="user" size={30} color="#2C64E3" />
              <Text style={{ fontSize: gridtextsize, textAlign: "center" }}>
                Register Faces
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
              <Icon name="user" size={30} color="#2C64E3" />
              <Text style={{ fontSize: gridtextsize, textAlign: "center" }}>
                Register Faces
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
              <Icon name="user" size={30} color="#2C64E3" />
              <Text style={{ fontSize: gridtextsize, textAlign: "center" }}>
                Register Faces
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
              <Icon name="user" size={30} color="#2C64E3" />
              <Text style={{ fontSize: gridtextsize, textAlign: "center" }}>
                Register Faces
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
              <Icon name="user" size={30} color="#2C64E3" />
              <Text style={{ fontSize: gridtextsize, textAlign: "center" }}>
                Register Faces
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
              <Icon name="user" size={30} color="#2C64E3" />
              <Text style={{ fontSize: gridtextsize, textAlign: "center" }}>
                Register Faces
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
              <Icon name="user" size={30} color="#2C64E3" />
              <Text style={{ fontSize: gridtextsize, textAlign: "center" }}>
                Register Faces
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
    backgroundColor: "#ffffff",
    // backgroundColor: "f4f4fc",
  },

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
  profileImg: {
    // width: 80,
    // height: 80,
    alignSelf: "center",
    // marginBottom: 36,
    // marginTop: 40,
  },
  profiletext: {
    textAlign: "center",
    fontFamily: "customfont",
    fontWeight: "bold",
    marginTop: 20,
    // marginBottom: 10,
    color: "#2D0202",
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
  homecontainer: {
    backgroundColor: "#f4f4fc",
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 40,
  },
  gridItem: {
    width: "30%",
    aspectRatio: 1,
    backgroundColor: "#E9F0FE",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  gridText: {
    // fontSize: gridtextsize,
    textAlign: "center",
  },
  profileview: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    padding: 10,
  },
});

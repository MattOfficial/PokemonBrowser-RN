import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  Card,
  Icon,
  Button,
} from "@ui-kitten/components";
import { default as theme } from "../pokemon_browser_theme.json";
import { StyleSheet, Image, View } from "react-native";

const HomeScreen = () => {
  return (
    <>
      <Layout
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 0.25 }}></View>
        <Card style={styles.container}>
          <Image
            style={styles.image}
            resizeMode={"stretch"}
            source={require("../assets/default.png")}
          />
          <View style={styles.cardText}>
            <Text category="h1">Name</Text>
            <Text>Stats</Text>
          </View>
        </Card>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              appearance="outline"
              status="danger"
              onPress={() => {
                console.log("Like");
              }}
            >
              Like
            </Button>
          </View>
          <View style={styles.button}>
            <Button
              appearance="outline"
              status="warning"
              onPress={() => {
                console.log("dislike");
              }}
            >
              Dislike
            </Button>
          </View>
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    maxWidth: "90%",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "rgba(99, 196, 25, 0.08)",
  },
  buttonContainer: {
    flex: 0.75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  image: {
    flex: 2,
    maxWidth: "80%",
    maxHeight: "80%",
    width: 320,
    height: 200,
    aspectRatio: 16 / 9,
    paddingBottom: 15,
  },
  cardText: {
    flex: 1,
    paddingTop: 25,
  },
  button: {
    padding: 10,
    width: "40%",
  },
  btnCtr: {
    width: "60%",
    flexDirection: "row",
  },
});

export default () => (
  <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
    <HomeScreen />
  </ApplicationProvider>
);

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props: { title: string }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#CD56E0",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Header;

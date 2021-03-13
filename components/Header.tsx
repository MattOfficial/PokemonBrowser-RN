import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";

const Header = (props: {
  title: string;
  buttonLeft?: any;
  buttonRight?: any;
  buttonLeftStyle?: any;
  buttonRightStyle?: any;
  headerStyle?: any;
}) => {
  return (
    <View style={{ ...styles.header, ...props.headerStyle }}>
      <View style={{ ...styles.buttonContainer, ...props.buttonLeftStyle }}>
        {props.buttonLeft}
      </View>
      <View>
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
      <View style={{ ...styles.buttonContainer, ...props.buttonRightStyle }}>
        {props.buttonRight}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary.s9,
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "bottom",
  },
  headerText: {
    flex: 8,
    color: Colors.dark.text,
    fontSize: 25,
    fontWeight: "bold",
    alignContent: "flex-end",
  },
  buttonContainer: {
    flex: 2,
    paddingHorizontal: 10,
    backgroundColor: Colors.primary.s9,
  },
});

export default Header;

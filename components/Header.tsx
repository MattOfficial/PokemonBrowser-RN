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
    <View style={{...styles.header, ...props.headerStyle}}>
      <View style={{...styles.buttonContainer, ...props.buttonLeftStyle}}>{props.buttonLeft}</View>
      <View>
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
      <View style={{...styles.buttonContainer, ...props.buttonRightStyle}}>{props.buttonRight}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#CD56E0",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    flex: 8,
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 2,
    paddingHorizontal: 10,
    height: '100%',
    backgroundColor: Colors.primary.s4,
  }
});

export default Header;

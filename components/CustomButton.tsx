import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

export interface ICustomButtonProps {
  children: any;
  onPress: Function;
  style?: any; 
}

export default function CustomButton(props: ICustomButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => props.onPress()}>
      <View style={{...styles.btnView, ...props.style}}>
        <Text style={styles.btnText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnView: {
    backgroundColor: Colors.primary.s5,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  btnText: {
    color: "white",
    fontFamily: "open_sans",
    fontSize: 18,
  },
});
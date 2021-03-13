import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import CustomButton, { ICustomButtonProps } from "../components/CustomButton";
import Colors from "../constants/Colors";
import Header from "../components/Header";
import RandomPokemonScreen from "./RandomPokemonScreen";

export interface IHomeScreenProps {}

function HomeScreen(props: IHomeScreenProps) {
  const [searching, setSearching] = useState(false);
  const [scrollingRandom, setScrollingRandom] = useState(false);

  const searchPokemonHandler = () => {
    setSearching(true);
    setScrollingRandom(false);
  };
  const randomPokemonHandler = () => {
    setSearching(false);
    setScrollingRandom(true);
  };
  const backBtnHandler = () => {
    console.log("Back button pressed");
  }

  const searchButtonProps: ICustomButtonProps = {
    children: "Search a Pokemon",
    onPress: searchPokemonHandler,
  };

  const randomButtonProps: ICustomButtonProps = {
    children: "Get random Pokemon",
    onPress: randomPokemonHandler,
  };

  const backButton = <Button title="Back" onPress={backBtnHandler} />

  const defaultComponent = (
    <>
      <Header title="Pokemon Browser" buttonLeft={backButton} />
      <View style={styles.pads}></View>
      <View style={styles.buttonView}>
        <CustomButton
          style={styles.searchBtn}
          textStyle={styles.searchBtnText}
          onPress={searchButtonProps.onPress}
        >
          {searchButtonProps.children}
        </CustomButton>
        <CustomButton
          style={styles.randomBtn}
          textStyle={styles.randomBtnText}
          onPress={randomButtonProps.onPress}
        >
          {randomButtonProps.children}
        </CustomButton>
      </View>
      <View style={styles.pads}></View>
    </>
  );

  let visibleComponent = <View></View>;
  if (!searching && !scrollingRandom) {
    visibleComponent = defaultComponent;
  }
  if (searching && !scrollingRandom) {
    visibleComponent = <View></View>;
  }
  if (!searching && scrollingRandom) {
    visibleComponent = <RandomPokemonScreen />;
  }

  return <View style={styles.container}>{visibleComponent}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    flex: 3,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.dark.background,
    padding: 20,
  },
  pads: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  searchBtn: {
    borderWidth: 2,
    borderColor: Colors.danger.s5,
    backgroundColor: Colors.danger.t1,
    maxWidth: "80%",
  },
  searchBtnText: {
    color: Colors.danger.s5,
    fontSize: 24,
    padding: 25,
    textAlign: "center",
    textAlignVertical: "center",
  },
  randomBtn: {
    borderWidth: 2,
    borderColor: Colors.success.s5,
    backgroundColor: Colors.success.t1,
    maxWidth: "80%",
  },
  randomBtnText: {
    color: Colors.success.s5,
    fontSize: 24,
    padding: 25,
    alignContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default HomeScreen;

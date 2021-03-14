import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Button } from "react-native";
import CustomButton, { ICustomButtonProps } from "../components/CustomButton";
import Colors from "../constants/Colors";
import Header from "../components/Header";
import RandomPokemonScreen from "./RandomPokemonScreen";
import SearchScreen from "./SearchScreen";
import { useDispatch, useSelector } from "react-redux";
import { PokeListType } from "../actions/PokeListActionTypes";
import { RootStore } from "../store/store";
import { GetPokeList } from "../actions/PokeListActions";

export interface IHomeScreenProps {}

function HomeScreen(props: IHomeScreenProps) {
  const dispatch = useDispatch();
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
    setSearching(false);
    setScrollingRandom(false);
  };

  const searchButtonProps: ICustomButtonProps = {
    children: "Search a Pokemon",
    onPress: searchPokemonHandler,
  };

  const randomButtonProps: ICustomButtonProps = {
    children: "Get random Pokemon",
    onPress: randomPokemonHandler,
  };

  const backButton = (
    <CustomButton onPress={backBtnHandler}>
      <Ionicons
        name="chevron-back-outline"
        color={Colors.dark.text}
        size={30}
      />
    </CustomButton>
  );

  const defaultComponent = (
    <>
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
    visibleComponent = <SearchScreen />;
  }
  if (!searching && scrollingRandom) {
    visibleComponent = <RandomPokemonScreen />;
  }

  return (
    <View style={styles.container}>
      <Header title="Pokemon Browser" buttonLeft={backButton} />
      {visibleComponent}
    </View>
  );
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
  backBtnText: {
    fontSize: 10,
  },
});

export default HomeScreen;

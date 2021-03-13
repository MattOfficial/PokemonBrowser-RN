import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import Colors from "../constants/Colors";

export interface ISearchScreenProps {}

const SearchScreen = (props: ISearchScreenProps) => {
  const [pokemon, setPokemon] = useState("");

  const pokemonEnteredHandler = () => {
    // Perform search action here
    setPokemon("");
    console.log(pokemon);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Input
          style={styles.searchBar}
          value={pokemon}
          placeholder="Enter pokemon here..."
          blurOnSubmit
          autoCapitalize="none"
          onChangeText={(value: string) => setPokemon(value)}
          placeholderTextColor={"#ccc"}
        />
        <CustomButton
          onPress={pokemonEnteredHandler}
          style={styles.searchButton}
        >
          <Ionicons
            name="search-circle-sharp"
            size={36}
            color={Colors.info.s4}
          />
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.foreground,
  },
  searchContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.dark.background,
    paddingVertical: 5,
  },
  searchBar: {
    flex: 8,
    paddingVertical: 10,
    backgroundColor: Colors.dark.background,
    color: Colors.dark.text,
    fontSize: 18,
    borderColor: Colors.info.s4,
  },
  searchButton: {
    flex: 2,
    backgroundColor: Colors.info.t1,
    borderColor: Colors.info.s4,
    borderWidth: 2,
    borderRadius: 0,
    maxHeight: "85%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default SearchScreen;

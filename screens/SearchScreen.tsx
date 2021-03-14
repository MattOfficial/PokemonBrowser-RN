import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store/store";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import Colors from "../constants/Colors";
import { GetPokemon } from "../actions/PokemonActions";

export interface ISearchScreenProps {}

const SearchScreen = (props: ISearchScreenProps) => {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const pokemonSearchHandler = () => {
    setPokemon("");
    dispatch(GetPokemon(pokemon));
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
          onPress={pokemonSearchHandler}
          style={styles.searchButton}
        >
          <Ionicons
            name="search-circle-sharp"
            size={36}
            color={Colors.info.s4}
          />
        </CustomButton>
      </View>
      <View style={styles.cardContainer}>
        {pokemonState.pokemon && (
          <Card
            style={styles.card}
            key={pokemonState.pokemon.sprites.front_default}
          >
            <Image
              style={styles.image}
              source={{ uri: pokemonState.pokemon.sprites.front_default }}
            />
            <View style={styles.cardTextContainer}>
              {pokemonState.pokemon.abilities.map((ability) => {
                return (
                  <Text style={styles.cardText}>{ability.ability.name}</Text>
                );
              })}
            </View>
          </Card>
        )}
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
  card: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1/1,
    backgroundColor: Colors.dark.background,
    borderWidth: 2,
    borderColor: Colors.danger.s4,
  },
  cardText: {
    fontSize: 24,
    fontWeight: "900",
    color: Colors.danger.s4,
  },
  image: {
    width: "95%",
    height: "90%",
    resizeMode: "stretch",
  },
  cardContainer: {
    alignItems: 'center',
    paddingVertical: 20
  },
  cardTextContainer: {
    alignItems: 'center'
  }
});

export default SearchScreen;

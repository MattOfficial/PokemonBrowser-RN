import React, { CSSProperties, useEffect } from "react";
import { View, StyleSheet, StyleProp, Image, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/PokemonActions";
import Colors from "../constants/Colors";
import { RootStore } from "../store/store";
import Card from "./Card";

const PokemonDisplay = (props: { style?: any; pokemon: string | number }) => {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  useEffect(() => {
    dispatch(GetPokemon(props.pokemon));
  });
  return (
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
  );
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1 / 1,
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
    alignItems: "center",
    paddingVertical: 20,
  },
  cardTextContainer: {
    alignItems: "center",
  },
});

export default PokemonDisplay;

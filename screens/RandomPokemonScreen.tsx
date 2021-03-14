import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import GestureRecognizer from "react-native-swipe-gestures";
import swipeDirections from "react-native-swipe-gestures";
import { PokeListType } from "../actions/PokeListActionTypes";
import { GetPokemon } from "../actions/PokemonActions";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import { RootStore } from "../store/store";

export interface IRandomPokemonScreenProps {
  pokeListProp?: PokeListType[] | undefined;
}

function RandomPokemonScreen(props: IRandomPokemonScreenProps) {
  const dispatch = useDispatch();
  const [currentPokemon, setCurrentPokemon] = useState(1);
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const loadAPokemon = () => {
    dispatch(GetPokemon(currentPokemon));
  };

  useEffect(() => {
    loadAPokemon();
  }, []);

  const swipeUpHandler = (gestureState: any) => {
    setCurrentPokemon((current) => current + 1);
    loadAPokemon();
  };
  const swipeDownHandler = (getstureState: any) => {
    if (currentPokemon === 1) {
      return;
    } else {
      setCurrentPokemon((current) => current - 1);
    }
    loadAPokemon();
  };

  return (
    <>
      <GestureRecognizer
        onSwipeUp={(state) => swipeUpHandler(state)}
        onSwipeDown={(state) => swipeDownHandler(state)}
        style={styles.cardContainer}
      >
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
      </GestureRecognizer>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.dark.background,
  },
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
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: Colors.dark.foreground,
  },
  cardTextContainer: {
    alignItems: "center",
  },
});

export default RandomPokemonScreen;

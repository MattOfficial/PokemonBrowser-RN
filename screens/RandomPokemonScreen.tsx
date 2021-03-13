import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
} from "react-native";
import Headers from "../components/Header";
import Card from "../components/Card";
import Colors from "../constants/Colors";

const Data = [
  {
    id: 1,
    url: require("../assets/default.png"),
  },
  {
    id: 2,
    url: require("../assets/default.png"),
  },
  {
    id: 3,
    url: require("../assets/default.png"),
  },
  {
    id: 4,
    url: require("../assets/default.png"),
  },
  {
    id: 5,
    url: require("../assets/default.png"),
  },
  {
    id: 6,
    url: require("../assets/default.png"),
  },
  {
    id: 7,
    url: require("../assets/default.png"),
  },
  {
    id: 8,
    url: require("../assets/default.png"),
  },
  {
    id: 9,
    url: require("../assets/default.png"),
  },
];

export interface IRandomPokemonScreenProps {}

function RandomPokemonScreen(props: IRandomPokemonScreenProps) {
  return (
    <>
      <SafeAreaView style={styles.screen}>
        <FlatList
          data={Data}
          renderItem={(itemList) => (
            <View style={{ paddingVertical: 10 }}>
              {console.log(itemList.item.url)}
              <Card style={styles.card} key={itemList.item.id}>
                <Image style={styles.image} source={itemList.item.url} />
                <Text style={styles.cardText}>Name: </Text>
                <Text style={styles.cardText}>Stats: </Text>
              </Card>
            </View>
          )}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "95%",
    height: "90%",
    resizeMode: "stretch",
  },
  card: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 4 / 5,
    backgroundColor: Colors.dark.foreground,
    borderWidth: 2,
    borderColor: Colors.primary.s4,
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.dark.background,
  },
  cardText: {
    fontSize: 24,
    fontWeight: "900",
    color: Colors.dark.text,
  },
});

export default RandomPokemonScreen;

import { combineReducers } from "redux";
import { pokeListReducer } from "./PokeListReducer";
import { pokemonReducer } from "./PokemonReducer";

const RootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokelist: pokeListReducer,
});

export default RootReducer;

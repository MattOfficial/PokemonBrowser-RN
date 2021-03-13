import axios from "axios";
import { Dispatch } from "redux";
import { PokemonDispatchTypes, PokemonActions } from "./PokemonActionTypes";

export const GetPokemon = (pokemon: string) => async (
  dispatch: Dispatch<PokemonDispatchTypes>
) => {
  try {
    dispatch({
      type: PokemonActions.POKEMON_LOADING,
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: PokemonActions.POKEMON_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PokemonActions.POKEMON_FAIL,
    });
  }
};

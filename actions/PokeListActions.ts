import axios from "axios";
import { Dispatch } from "redux";
import { PokeListActions, PokeListDispatchTypes } from "./PokeListActionTypes";

export const GetPokeList = (limit: number = 20, offset: number = 0) => async (
  dispatch: Dispatch<PokeListDispatchTypes>
) => {
  try {
    dispatch({
      type: PokeListActions.LIST_LOADING,
    });

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    dispatch({
      type: PokeListActions.LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PokeListActions.LIST_FAIL,
    });
  }
};

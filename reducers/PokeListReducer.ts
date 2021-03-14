import {
  PokeListActions,
  PokeListDispatchTypes,
  PokeListType,
} from "../actions/PokeListActionTypes";

interface IDefaultState {
  loading: boolean;
  pokeList?: PokeListType[];
}

const defaultState: IDefaultState = {
  loading: false,
};

export const pokeListReducer = (
  state: IDefaultState = defaultState,
  action: PokeListDispatchTypes
): IDefaultState => {
  switch (action.type) {
    case PokeListActions.LIST_FAIL:
      return {
        loading: false,
      };
    case PokeListActions.LIST_LOADING:
      return {
        loading: true,
      };
    case PokeListActions.LIST_SUCCESS:
      return {
        loading: false,
        pokeList: action.payload,
      };
    default:
      return state;
  }
};

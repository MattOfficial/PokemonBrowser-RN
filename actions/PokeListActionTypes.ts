export enum PokeListActions {
  LIST_LOADING = "LIST_LOADING",
  LIST_FAIL = "LIST_FAIL",
  LIST_SUCCESS = "LIST_SUCCESS",
}

export type PokeListType = {
  name: string;
  url: string;
};

export interface IPokeListLoading {
  type: typeof PokeListActions.LIST_LOADING;
}

export interface IPokeListFail {
  type: typeof PokeListActions.LIST_FAIL;
}

export interface IPokeListSuccess {
  type: typeof PokeListActions.LIST_SUCCESS;
  payload: PokeListType[];
}

export type PokeListDispatchTypes =
  | IPokeListFail
  | IPokeListLoading
  | IPokeListSuccess;

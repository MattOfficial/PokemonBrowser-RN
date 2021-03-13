export enum PokemonActions {
  POKEMON_LOADING = "POKEMON_LOADING",
  POKEMON_FAIL = "POKEMON_FAIL",
  POKEMON_SUCCESS = "POKEMON_SUCCESS",
}

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};

export type PokemonSprites = {
  front_default: string;
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
};

export interface IPokemonLoading {
  type: typeof PokemonActions.POKEMON_LOADING;
}

export interface IPokemonFailed {
  type: typeof PokemonActions.POKEMON_FAIL;
}

export interface IPokemonSuccess {
  type: typeof PokemonActions.POKEMON_SUCCESS;
  payload: PokemonType;
}

export type PokemonDispatchTypes =
  | IPokemonFailed
  | IPokemonLoading
  | IPokemonSuccess;

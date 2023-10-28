import { IPokemon, IPokemons } from "./searchPokemons/types";

export interface ISearchState {
	loading: boolean;
	error: null | string;
	data: null | IPokemons | IPokemon;
    currPage: number;
}

export type IFullPokemonData = IPokemon | IPokemons | null

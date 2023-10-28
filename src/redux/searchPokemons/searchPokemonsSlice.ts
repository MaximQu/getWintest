import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ISearchState } from "../types";
import { IPokemon, IPokemons } from "./types";
import { fetchPokemons } from "./asyncAction";

const initialState: ISearchState = {
	loading: false,
	error: null,
	data: null,
	currPage: 0,
};

export const pokemonSlice = createSlice({
	name: "searchPokemon",
	initialState,
	reducers: {
		sortPokemonsByName: (state) => {
			if (state.data && "results" in state.data) {
				state.data.results = state.data?.results.sort((a, b) =>
					a.name > b.name ? 1 : -1,
				);
			}
		},
		sortPokemonsById: (state) => {
			if (state.data && "results" in state.data) {
				state.data.results = state.data?.results.sort((a, b) =>
					a.id > b.id ? 1 : -1,
				);
			}
		},
		sortPokemonsByType: (state) => {
			if (state.data && "results" in state.data) {
				state.data.results = state.data?.results.sort((a, b) =>
					a.types[0].type.name < b.types[0].type.name ? 1 : -1,
				);
			}
		},
		changeCurrPage: (state, action: PayloadAction<number>) => {
            state.currPage = action.payload
        },
	},
	extraReducers(builder) {
		builder
			.addCase(fetchPokemons.pending, (state) => {
				state.loading = true;
			})
			.addCase(
				fetchPokemons.fulfilled,
				(state, action: PayloadAction<IPokemon | IPokemons>) => {
					state.loading = false;
					state.data = action.payload;
					if (action.payload !== null) {
						state.error = null;
					}
				},
			)
			.addCase(
				fetchPokemons.rejected,
				(state, action: PayloadAction<any>) => {
					state.loading = false;
					state.error = action.payload;
				},
			);
	},
});

export const { sortPokemonsById, sortPokemonsByName, sortPokemonsByType,changeCurrPage } =
	pokemonSlice.actions;

export default pokemonSlice.reducer;

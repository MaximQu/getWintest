import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemon } from "./asyncAction";
import { IPokemon, IPokemons, ISearchState } from "./types";

const initialState: ISearchState = {
	loading: false,
	error: null,
	data: null,
};

export const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {

	},
	extraReducers(builder) {
		builder
			.addCase(fetchPokemon.pending, (state) => {
				state.loading = true;
			})
			.addCase(
				fetchPokemon.fulfilled,
				(state, action: PayloadAction<IPokemons | IPokemon>) => {
					state.loading = false;
					state.data = action.payload;
				},
			)
			.addCase(
				fetchPokemon.rejected,
				(state, action: PayloadAction<any>) => {
					state.loading = false;
					state.error = action.payload;
				},
			);
	},
});

export const { } = searchSlice.actions;

export default searchSlice.reducer;

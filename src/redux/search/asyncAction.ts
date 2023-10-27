import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPokemon, IPokemons } from "./types";
import axios from "axios";

export const fetchPokemon = createAsyncThunk(
	"search/fetchPokemon",
	async (queryParams: string = '', thunkApi) => {
		try {
			const response = await axios.get<IPokemons | IPokemon>(
				`https://pokeapi.co/api/v2/pokemon${queryParams ? '/' + queryParams : '?limit=20'}`,
			);
			return response.data;
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
);

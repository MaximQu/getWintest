import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPokemons } from "./types";

export const fetchPokemon = createAsyncThunk(
	"search/fetchPokemon",
	async (_, thunkApi) => {
		try {
			const response = await axios.get<IPokemons>(
				`https://pokeapi.co/api/v2/pokemon?limit=20`,
			);
			return response.data;
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
);

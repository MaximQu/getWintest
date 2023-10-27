import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPokemon, IPokemons } from "./types";
import axios from "axios";

export const fetchPokemon = createAsyncThunk(
	"search/fetchPokemon",
	async (queryParams: string = "", thunkApi) => {
		try {
			const response = await axios.get<IPokemon>(
				`https://pokeapi.co/api/v2/pokemon/${queryParams}/`,
			);
			return response.data;
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
);

export const fetchPokemons = createAsyncThunk(
	"search/fetchPokemon",
	async (offsetParamsNum: number = 0, thunkApi) => {
		try {
			const response = await axios.get<IPokemons>(
				`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offsetParamsNum}`,
			);
			return response.data;
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
);

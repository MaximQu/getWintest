import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPokemon, IPokemons } from "./types";

export const fetchPokemons = createAsyncThunk(
	"search/fetchPokemons",
	async (offsetNum: number = 0, thunkApi) => {
		try {
			const response = await axios.get<IPokemons>(
				`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offsetNum * 20}`,
			);
			const pokemonDataRequests = response.data.results.map(
				async (pokemon) => {
					const pokemonFullData = await axios.get<IPokemon>(
						`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`,
					);
					return {
						...pokemonFullData.data,
						url: `https://pokeapi.co/api/v2/pokemon/${pokemonFullData.data.id}/`,
					};
				},
			);
			const updatedResults = await Promise.all(pokemonDataRequests);

			return {
				...response.data,
				results: updatedResults as IPokemon[],
			};
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
);

export const fetchPokemon = createAsyncThunk(
	"search/fetchPokemons",
	async (name: string = "", thunkApi) => {
		try {
			const response = await axios.get<IPokemon>(
				`https://pokeapi.co/api/v2/pokemon/${name}/`,
			);
			return {
				...response.data,
				url: `https://pokeapi.co/api/v2/pokemon/${response.data.id}/`,
			};
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
);

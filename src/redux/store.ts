import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./searchPokemons/searchPokemonsSlice";


export const store = configureStore({
	reducer: { pokemonSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

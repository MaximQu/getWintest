import { useAppDispatch, useAppSelector } from "@/hooks/PokemonTypedSelector";

import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { fetchPokemon, fetchPokemons } from "@/redux/searchPokemons/asyncAction";

const Search = () => {
	const dispatch = useAppDispatch();
	const currPage  = useAppSelector(
		(state) => state.pokemonSlice.currPage,
	);
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const handleInputChange = () => {
		if (inputRef.current) {
			setInputValue(inputRef.current.value);
		}
	};

	const handleSearchPokemon = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputValue === "") {
			dispatch(fetchPokemons(currPage));
		} else {
			dispatch(fetchPokemon(inputValue));
		}
	};

	useEffect(() => {
		dispatch(fetchPokemons(currPage));
	}, [dispatch]);

	return (
		<form onSubmit={handleSearchPokemon} className={styles.form}>
			<input
				ref={inputRef}
				className={styles.input}
				type="text"
				name="pokemonSearch"
				placeholder="Enter pokemon"
				value={inputValue}
				onChange={handleInputChange}
			/>
			<button className="btn" type="submit">
				Search
			</button>
		</form>
	);
};

export default Search;

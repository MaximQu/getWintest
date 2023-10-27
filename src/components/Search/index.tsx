import { useEffect, useState, useRef, FormEvent } from "react";
import { fetchPokemon, fetchPokemons } from "@/redux/search/asyncAction";
import { useAppDispatch } from "@/hooks/PokemonTypedSelector";
import styles from "./styles.module.scss";

const Search = () => {
	const dispatch = useAppDispatch();

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
		console.log("1");

			dispatch(fetchPokemons(0));
		console.log("2");

		} else {
		console.log("3");

			dispatch(fetchPokemon(inputValue));
		}
	};

	useEffect(() => {
		dispatch(fetchPokemons(0));
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

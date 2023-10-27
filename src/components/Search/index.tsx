import { useEffect, useState, useRef, FormEvent } from "react";
import { fetchPokemon } from "@/redux/search/asyncAction";
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
		dispatch(fetchPokemon(inputValue));
	};

	useEffect(() => {
		dispatch(fetchPokemon(''));
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
				required
			/>
			<button className='btn' type="submit">Search</button>
		</form>
	);
};

export default Search;

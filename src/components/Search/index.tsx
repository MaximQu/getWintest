import { useEffect, useState, useRef, FormEvent } from "react";
import { useAppDispatch } from "../../hooks/PokemonTypedSelector";
import { fetchPokemon } from "../../redux/search/asyncAction";
import "./styles.scss";

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
		dispatch(fetchPokemon());
	};

	useEffect(() => {
		dispatch(fetchPokemon());
	}, [dispatch]);

	return (
		<form onSubmit={handleSearchPokemon} className="search__form">
			<input
				ref={inputRef}
				className="search__input"
				type="text"
				name="pokemonSearch"
				placeholder="Enter pokemon"
				value={inputValue}
				onChange={handleInputChange}
				required
			/>
			<button type="submit">Search</button>
		</form>
	);
};

export default Search;

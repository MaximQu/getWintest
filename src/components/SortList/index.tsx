import { useAppDispatch } from "@/hooks/PokemonTypedSelector";
import { sortPokemonsById, sortPokemonsByName, sortPokemonsByType } from "@/redux/searchPokemons/searchPokemonsSlice";
import styles from "./styles.module.scss";

const SortList = () => {
    const dispatch = useAppDispatch()
	return (
		<div className={styles.root}>
            <span>Sort by:</span>
			<button className={styles.item} onClick={() => dispatch(sortPokemonsByName())}>Name</button>
			<button className={styles.item} onClick={() => dispatch(sortPokemonsById())}>Id</button>
			<button className={styles.item} onClick={() => dispatch(sortPokemonsByType())}>Type</button>
		</div>
	);
}; 

export default SortList;

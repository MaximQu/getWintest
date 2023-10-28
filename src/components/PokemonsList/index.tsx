import { useAppSelector } from "@/hooks/PokemonTypedSelector";
import Loading from "../Loading";
import Pagination from "../Pagination";
import PokemonItem from "../PokemonItem";
import SearchError from "../SearchError";
import styles from "./styles.module.scss";
import { IFullPokemonData } from "@/redux/types";
import { IPokemon, IPokemons } from "@/redux/searchPokemons/types";

const PokemonsList = () => {
	const { data, loading, error, currPage } = useAppSelector(
		(state) => state.pokemonSlice,
	);

	if (error) return <SearchError error={error} />;
    if (loading) return <Loading />;

	const isPokemons = (data: IFullPokemonData): data is IPokemons => {
        if(!data) return false
		return 'results' in data
	};
	const isPokemon = (data: IFullPokemonData): data is IPokemon => {
		if(!data) return false
		return 'id' in data
	};

	return (
		<>
			{isPokemons(data) ? (
				<>
					<ul className={styles.root}>
						{data?.results.map((item) => (
							<li key={item.name}>
								<PokemonItem item={item} />
							</li>
						))}
					</ul>
					<Pagination data={data.count} currPage={currPage} />
				</>
			) : isPokemon(data) ? (
				<ul className={styles.root}>
					<li>
						<PokemonItem item={data} />
					</li>
				</ul>
			) : null}
		</>
	);
};

export default PokemonsList;

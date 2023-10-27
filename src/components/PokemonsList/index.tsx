import { useAppSelector } from "../../hooks/PokemonTypedSelector";
import Loading from "../Loading";
import PokemonItem from "../PokemonItem";
import SearchError from "../SearchError";
import styles from "./styles.module.scss";

const PokemonsList = () => {
	const { data, loading, error } = useAppSelector(
		(state) => state.searchSlice,
	);

	if (error) return <SearchError error={error} />;

	if (data && "id" in data) {
		return (
			<ul className={styles.root}>
				{loading ? (
					<Loading />
				) : (
					<li>
						<PokemonItem
							item={{
								name: data.name,
								url: `https://pokeapi.co/api/v2/pokemon/${data.id}/`,
							}}
						/>
					</li>
				)}
			</ul>
		);
	}

	if (data && "results" in data) {
		return (
			<ul className={styles.root}>
				{loading ? (
					<Loading />
				) : (
					data?.results.map((item) => (
						<li key={item.name}>
							<PokemonItem item={item} />
						</li>
					))
				)}
			</ul>
		);
	}
};

export default PokemonsList;

import { useAppSelector } from "@/hooks/PokemonTypedSelector";
import Loading from "../Loading";
import Pagination from "../Pagination";
import PokemonItem from "../PokemonItem";
import SearchError from "../SearchError";
import styles from "./styles.module.scss";

const PokemonsList = () => {

	const { data, loading, error, currPage } = useAppSelector(
		(state) => state.pokemonSlice,
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
							item={data}
						/>
					</li>
				)}
			</ul>
		);
	}

	if (data && "results" in data) {
		return (
			<>
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
				<Pagination data={data.count} currPage={currPage} />
			</>
		);
	}
};

export default PokemonsList;

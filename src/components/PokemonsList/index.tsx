import { useAppSelector } from "../../hooks/PokemonTypedSelector";
import Loading from "../Loading";
import PokemonItem from "../PokemonItem";
import styles from "./styles.module.scss";

const PokemonsList = () => {
	const { data, loading, error } = useAppSelector(
		(state) => state.searchSlice,
	);

	if (error) return <p>Error: {error}</p>;
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
};

export default PokemonsList;

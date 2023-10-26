import { useAppSelector } from "../../hooks/PokemonTypedSelector";
import PokemonItem from "../PokemonItem";
import "./styles.module.scss";

const PokemonsList = () => {
	const { data, loading, error } = useAppSelector(
		(state) => state.searchSlice,
	);

	if (error) return <p>Error: {error}</p>;
	return (
		<ul>
			{loading ? (
				<span>Loading...</span>
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

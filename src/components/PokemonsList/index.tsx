import { useEffect } from "react";
import { useAppSelector } from "../../hooks/PokemonTypedSelector";
import PokemonItem from "../PokemonItem";
import "./styles.scss";

const PokemonsList = () => {
	// const dispatch = useAppDispatch();
	const { data, loading, error } = useAppSelector(
		(state) => state.searchSlice,
	);
    useEffect(() => {
        console.log(data);
      }, [])
	if (error) return <p>Error: {error}</p>;
	if (data === null) return 'no items';
	return (
		<ul>
			{loading ? (
				<span>Loading...</span>
			) : (
				data.results.map((item) => (
					<li key={item.name}>
						<PokemonItem item={item} />
					</li>
				))
			)}
		</ul>
	);
};

export default PokemonsList;

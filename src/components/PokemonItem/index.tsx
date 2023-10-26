import { FC } from "react";
import {  IPokemonResult } from "../../redux/search/types";
import "./styles.scss";

const PokemonItem: FC<{ item: IPokemonResult }> = ({ item }) => {

	return (
		<>
			<h2>{item?.name}</h2>
		</>
	);
};

export default PokemonItem;

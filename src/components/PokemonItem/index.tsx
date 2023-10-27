import { FC } from "react";
import { Link } from "react-router-dom";
import { IPokemonResult } from "../../redux/search/types";
import styles from "./styles.module.scss";

const PokemonItem: FC<{ item: IPokemonResult }> = ({ item }) => {
	const pokemonId = item.url.split("/").slice(-2, -1)[0];
	const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
	return (
		<Link className={`${styles.item} sheen` }to={`/pokemon/${pokemonId}`}>
			<h2 className={styles.name}>{item?.name}</h2>
			<img className={styles.img} src={pokemonImg} alt={item?.name} />
		</Link>
	);
};

export default PokemonItem;

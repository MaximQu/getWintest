import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { IPokemon } from "@/redux/searchPokemons/types";

const PokemonItem: FC<{ item: IPokemon }> = ({ item }) => {
	return (
		<Link className={`${styles.item} sheen` }to={`/pokemon/${item.id}`}
        >
			<h2 className={styles.name}>{item?.name}</h2>
			<img className={styles.img} src={item.sprites.other["official-artwork"].front_default} alt={item?.name} />
            <p>Type: {item.types[0].type.name}</p>
		</Link>
	);
};

export default PokemonItem;

import { IPokemonPhoto } from "@/redux/searchPokemons/types";
import { FC } from "react";
import styles from "./styles.module.scss";

const PokemonPhoto: FC<{ data: IPokemonPhoto }> = ({ data }) => {
	return (
		<div className={styles.root}>
			<img
				src={data?.other["official-artwork"].front_default}
				className={styles.img}
				alt="Pokemon"
			/>
		</div>
	);
};

export default PokemonPhoto;

import  { FC } from "react";
import styles from "./styles.module.scss";
import { IPokemonAbilities } from "@/redux/search/types";

const AbilitiesTable: FC<{ data: IPokemonAbilities[] }> = ({ data }) => {
	return (
		<div className={styles.root}>
			<h2 className={styles.heading}>Abilities:</h2>
			<ul className={styles.list}>
				{data?.map((item) => (
					<li key={item.ability.name} className={styles.item}> {item.ability.name}</li>
				))}
			</ul>
		</div>
	);
};

export default AbilitiesTable;

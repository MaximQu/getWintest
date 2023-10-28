import { IPokemonStats } from "@/redux/searchPokemons/types";
import { FC } from "react";
import styles from "./styles.module.scss";

const StatsTable: FC<{ data: IPokemonStats[] }> = ({ data }) => {
	return (
		<table className={styles.table}>
			<thead className={styles.thead}>
				<tr>
					<th>Stats</th>
				</tr>
			</thead>
			<tbody className={styles.tbody}>
				{data?.map((item) => (
					<tr className={styles.body} key={item.stat.name}>
						<td className={styles.statName}>{item.stat.name}</td>
						<td className={styles.statBase}>{item.base_stat}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default StatsTable;

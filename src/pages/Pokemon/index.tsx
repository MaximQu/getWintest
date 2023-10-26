import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { IPokemon } from "../../redux/search/types";
import styles from "./styles.module.scss";
const Pokemon = () => {
	const { id } = useParams();
	const { data, loading, error } = useFetch<IPokemon>(
		`https://pokeapi.co/api/v2/pokemon/${id}/`,
	);
	if (error) return <span>Error: {error.message}</span>;
	return (
		<>
			{data !== null && loading ? (
				<span>Loading</span>
			) : (
				<div className={styles.root}>
					<img
						src={
							data?.sprites.other["official-artwork"]
								.front_default
						}
						className={styles.img}
						alt={data?.name}
					/>
					<h1>{data?.name}</h1>
					<p>
						<span>Abilities:</span>
						{data?.abilities.map((item) => (
							<td>{item.ability.name}</td>
						))}
					</p>
					<table>
						<tr>
							<th>Stats</th>
						</tr>
						{data?.stats.map((item) => (
							<tr className={styles.body} key={item.stat.name}>
								<td>
									<p>{item.stat.name}</p>
								</td>
								<td>
									<span>{item.base_stat}</span>
								</td>
							</tr>
						))}
					</table>
					<p>
						Moves:
						{data?.moves.map((item) => item.move.name).join(", ")}
					</p>
				</div>
			)}
		</>
	);
};

export default Pokemon;

import Loading from "@/components/Loading";
import useFetch from "@/hooks/useFetch";
import { IPokemon } from "@/redux/searchPokemons/types";
import { Link, useParams } from "react-router-dom";
import AbilitiesTable from "./components/Abilities";
import MovesTable from "./components/Moves";
import PokemonPhoto from "./components/PokemonPhoto";
import StatsTable from "./components/Stats";
import styles from "./styles.module.scss";

const Pokemon = () => {
	const { id } = useParams();
	const { data, loading, error } = useFetch<IPokemon>(
		`https://pokeapi.co/api/v2/pokemon/${id}/`,
	);
	if (error) return <span>Error: {error.message}</span>;
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<div className={styles.root}>
						<div className="">
							<h1 className={styles.name}>{data?.name}</h1>
							<PokemonPhoto data={data?.sprites!} />
						</div>
						<div className={styles.wrapp}>
							<AbilitiesTable data={data?.abilities!} />
							<StatsTable data={data?.stats!} />
							<MovesTable data={data?.moves!} />
						</div>
					</div>
					<Link className={`${styles.btn} btn`} to="/">
						Back
					</Link>
				</>
			)}
		</>
	);
};

export default Pokemon;

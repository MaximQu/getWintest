import Search from "../../components/Search";
import PokemonsList from "../../components/PokemonsList";
import styles from "./styles.module.scss";

const Home = () => {
	return (
		<div className={styles.root}>
			<h1 className={styles.root__title}>Who's that pokemon?</h1>
			<Search />
			<h2 className={styles.list__title}>Pokemons list</h2>
			<PokemonsList />
		</div>
	);
};

export default Home;

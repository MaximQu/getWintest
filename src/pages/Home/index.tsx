import PokemonsList from "@/components/PokemonsList";
import Search from "@/components/Search";
import styles from "./styles.module.scss";
import SortList from "@/components/SortList";

const Home = () => {
	return (
		<div className={styles.root}>
			<h1 className={styles.root__title}>Who's that pokemon?</h1>
			<Search />
            <SortList/>
			<h2 className={styles.list__title}>Pokemons list</h2>
			<PokemonsList />
		</div>
	);
};

export default Home;

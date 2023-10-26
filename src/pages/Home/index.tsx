import Search from "../../components/Search";
import PokemonsList from "../../components/PokemonsList";

const Home = () => {
	return (
		<div>
			<h1 className="title">Who's that pokemon?</h1>
			<Search />
			<h2>Pokemons list</h2>
			<PokemonsList />
		</div>
	);
};

export default Home;

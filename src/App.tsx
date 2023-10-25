import Footer from "./components/Footer";
import Header from "./components/Header";
import PokemonsList from "./components/PokemonsList";
import Search from "./components/Search";
import "./styles/App.scss";

const App = () => {
	return (
		<>
			<Header />
			<main>
                <h1>Who's your pokemon?</h1>
                <Search/>
                <h2>Pokemons list</h2>
                <PokemonsList/>
            </main>
			<Footer />
		</>
	);
};

export default App;

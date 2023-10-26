import Footer from "./components/Footer";
import Header from "./components/Header";
import PokemonsList from "./components/PokemonsList";
import Search from "./components/Search";
// import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";

const App = () => {
	return (
		<>
			<Header />
			<main className="container">
				<h1 className="title">Who's that pokemon?</h1>
				<Search />
				<h2>Pokemons list</h2>
				<PokemonsList />

			</main>
			<Footer />
		</>
	);
};

export default App;

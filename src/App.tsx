import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<main className="container">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pokemon/:id" element={<Pokemon />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</main>
	);
};

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import NotFound from "./pages/NotFound";
import "./styles/App.scss";

const App = () => {
	return (
		<main className="container">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pokemon/:id" element={<Pokemon />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</main>
	);
};

export default App;

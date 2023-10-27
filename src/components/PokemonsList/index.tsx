import ReactPaginate from "react-paginate";
import {
	useAppDispatch,
	useAppSelector,
} from "../../hooks/PokemonTypedSelector";
import Loading from "../Loading";
import PokemonItem from "../PokemonItem";
import SearchError from "../SearchError";
import styles from "./styles.module.scss";
import {  fetchPokemons } from "@/redux/search/asyncAction";

const PokemonsList = () => {
	const { data, loading, error } = useAppSelector(
		(state) => state.searchSlice,
	);

	const dispatch = useAppDispatch();
	if (error) return <SearchError error={error} />;

	if (data && "id" in data) {
		return (
			<ul className={styles.root}>
				{loading ? (
					<Loading />
				) : (
					<li>
						<PokemonItem
							item={{
								name: data.name,
								url: `https://pokeapi.co/api/v2/pokemon/${data.id}/`,
							}}
						/>
					</li>
				)}
			</ul>
		);
	}

	if (data && "results" in data) {
		return (
			<>
				<ul className={styles.root}>
					{loading ? (
						<Loading />
					) : (
						data?.results.map((item) => (
							<li key={item.name}>
								<PokemonItem item={item} />
							</li>
						))
					)}
				</ul>
				<ReactPaginate
					containerClassName={styles.wrapper}
					pageLinkClassName={styles.item}
					nextLinkClassName={styles.next}
					previousLinkClassName={styles.prev}
                    activeClassName={styles.activePage}
                    disabledClassName={styles.disabled}
					breakLabel="..."
					nextLabel="next >"
					onPageChange={(e) =>
						dispatch(fetchPokemons(e.selected * 20))
					}
					pageRangeDisplayed={5}
					pageCount={Math.ceil(data.count / 20)}
					previousLabel="< prev"
					renderOnZeroPageCount={null}
				/>
			</>
		);
	}
};

export default PokemonsList;

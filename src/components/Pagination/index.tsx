import { useAppDispatch } from "@/hooks/PokemonTypedSelector";
import ReactPaginate from "react-paginate";
import styles from "./styles.module.scss";
import { fetchPokemons } from "@/redux/searchPokemons/asyncAction";
import { changeCurrPage } from "@/redux/searchPokemons/searchPokemonsSlice";

const Pagination = ({ data, currPage }: { data: number; currPage: number }) => {
	const dispatch = useAppDispatch();
	const handleChangePage = (e: any) => {
		dispatch(fetchPokemons(e.selected));
		dispatch(changeCurrPage(e.selected));
	};

	return (
		<ReactPaginate
			containerClassName={styles.wrapper}
			pageLinkClassName={styles.item}
			nextLinkClassName={styles.next}
			previousLinkClassName={styles.prev}
			activeClassName={styles.activePage}
			disabledClassName={styles.disabled}
			forcePage={currPage}
			breakLabel="..."
			nextLabel="next >"
			onPageChange={handleChangePage}
			pageRangeDisplayed={5}
			pageCount={Math.ceil(data / 20)}
			previousLabel="< prev"
			renderOnZeroPageCount={null}
		/>
	);
};

export default Pagination;

import ReactPaginate from "react-paginate";
import { useAppDispatch } from "@/hooks/PokemonTypedSelector";
import { fetchPokemons } from "@/redux/search/asyncAction";
import styles from "./styles.module.scss";

const Pagination = ({ data }: { data: number }) => {
	const dispatch = useAppDispatch();

	return (
		<div>
			<ReactPaginate
				containerClassName={styles.wrapper}
				pageLinkClassName={styles.item}
				nextLinkClassName={styles.next}
				previousLinkClassName={styles.prev}
				activeClassName={styles.activePage}
				disabledClassName={styles.disabled}
				breakLabel="..."
				nextLabel="next >"
				onPageChange={(e) => dispatch(fetchPokemons(e.selected * 20))}
				pageRangeDisplayed={5}
				pageCount={Math.ceil(data / 20)}
				previousLabel="< prev"
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};

export default Pagination;

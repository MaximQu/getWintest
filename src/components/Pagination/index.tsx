// import { useState } from "react";

// import ReactPaginate from "react-paginate";

// // Example items, to simulate fetching from another resources.
// // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// // function Items({ currentItems }) {
// // 	return (
// // 		<>
// // 			{currentItems &&
// // 				currentItems.map((item) => (
// // 					<div>
// // 						<h3>Item #{item}</h3>
// // 					</div>
// // 				))}
// // 		</>
// // 	);
// // }

// const PaginatedItems = ({ itemsPerPage }) => {
// 	// const [itemOffset, setItemOffset] = useState(0);

// 	// const endOffset = itemOffset + itemsPerPage;
// 	// const currentItems = items.slice(itemOffset, endOffset);
// 	// const pageCount = Math.ceil(items.length / itemsPerPage);

// 	// const handlePageClick = (event) => {
// 	// 	const newOffset = (event.selected * itemsPerPage) % items.length;
// 	// 	setItemOffset(newOffset);
// 	// };

// 	return (
// 		<>
// 			<ReactPaginate
// 				breakLabel="..."
// 				nextLabel="next >"
// 				onPageChange={handlePageClick}
// 				pageRangeDisplayed={5}
// 				pageCount={pageCount}
// 				previousLabel="< previous"
// 				renderOnZeroPageCount={null}
// 			/>
// 		</>
// 	);
// };

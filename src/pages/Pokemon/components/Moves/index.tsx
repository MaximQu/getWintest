import  { FC, useState } from "react";
import styles from "./styles.module.scss";
import { IPokemonMoves } from "../../../../redux/search/types";

const MovesTable: FC<{ data: IPokemonMoves[] }> = ({ data }) => {
	const [showList, setShowList] = useState(false);

	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<h2 className={styles.heading}>Moves:</h2>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					onClick={() => setShowList((prev) => !prev)}
					className={`${styles.iconArrow} ${
						showList ? styles.active : ""
					} }`}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 8.25l-7.5 7.5-7.5-7.5"
					/>
				</svg>
			</div>
			<p className={`${styles.text} ${showList ? styles.active : ""} `}>
				{data?.map((item) => item.move.name).join(", ")}
			</p>
		</div>
	);
};

export default MovesTable;

import styles from "./styles.module.scss";
import pikachuError from '/images/error-pikachu.gif';

const SearchError = ({ error }: { error: string }) => {
	return (
		<div className={styles.root}>
			<img className={styles.img} src={pikachuError} alt="Pokemon-error" />
			<p className={styles.text}>Error: {error}</p>
		</div>
	);
};

export default SearchError;

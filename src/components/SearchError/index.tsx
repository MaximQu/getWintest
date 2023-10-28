import styles from "./styles.module.scss";

const SearchError = ({ error }: { error: string }) => {
	return (
		<div className={styles.root}>
			<img className={styles.img} src="/images/error-pikachu.gif" alt="Pokemon-error" />
			<p className={styles.text}>Error: {error}</p>
		</div>
	);
};

export default SearchError;

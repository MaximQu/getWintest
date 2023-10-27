import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const NotFound = () => {
	return (
		<div className={styles.root}>
			<span className={styles.text}>Not found</span>
			<Link className="btn" to='/getWintest'>Back</Link>
		</div>
	);
};

export default NotFound;

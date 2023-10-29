import styles from './styles.module.scss'
import pikachu from '/images/pikachu.gif';
const Loading = () => {
  return (
    <div className={styles.root}>
        <img className={styles.img} src={pikachu} alt="Pikachu" />
        <span className={styles.text}>Loading . . .</span>
    </div>
  )
}

export default Loading

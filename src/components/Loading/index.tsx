import styles from './styles.module.scss'

const Loading = () => {
  return (
    <div className={styles.root}>
        <img className={styles.img} src="../../assets/images/pikachu.gif" alt="Pikachu" />
        <span className={styles.text}>Loading . . .</span>
    </div>
  )
}

export default Loading

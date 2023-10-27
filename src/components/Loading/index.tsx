import styles from './styles.module.scss'

const Loading = () => {
  return (
    <div className={styles.root}>
        <img className={styles.img} src="/images/pikachu.gif" alt="Pikachu" />
        <span className={styles.text}>Loading . . .</span>
    </div>
  )
}

export default Loading

import styles from "./Pacman.module.scss"

export default function Pacman () {
  return( 
    <div>
      <div className={styles.pacman}>
        <div class={styles.pacman__eye}></div>
        <div class={styles.pacman__mouth}></div>
        <div className={styles.dots_list}>
          <div className={styles.dot}>Youtube</div>
          <div className={styles.dot}>Facebook</div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </div>
  )
}

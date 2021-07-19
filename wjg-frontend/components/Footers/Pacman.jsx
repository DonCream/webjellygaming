import styles from "./Pacman.module.scss"

export default function Pacman () {
  return( 
    <div className={[[`flex flex-row justify-evenly`], styles.game].join(' ')}>
      <div className="pacman">
        <div class="pacman_eye"></div>
        <div class="pacman_mouth"></div>
      </div>
        <div className="">
          <div className="dot">Youtube</div>
          <div className="dot">Facebook</div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
  )
}

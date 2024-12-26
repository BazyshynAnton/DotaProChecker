import About from "./About"

import styles from "@/styles/home/Home.module.scss"
import ProMatches from "./ProMatches"

export default function HomeContent() {
  return (
    <div className={styles.content}>
      <div className={styles.content__info}>
        <About />
      </div>
      <ProMatches />
    </div>
  )
}

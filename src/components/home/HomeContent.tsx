import About from "./About"

import styles from "@/styles/home/Home.module.scss"
import ProMatches from "./ProMatches"
import DotaNews from "./DotaNews"

export default function HomeContent() {
  return (
    <div className={styles.content}>
      <div className={styles.content__info}>
        <About />
        <DotaNews />
      </div>
      <ProMatches />
    </div>
  )
}

import About from "./About"

import styles from "@/styles/home/Home.module.scss"

export default function HomeContent() {
  return (
    <div className={styles.content}>
      <div className={styles.content__info}>
        <About />
      </div>
    </div>
  )
}

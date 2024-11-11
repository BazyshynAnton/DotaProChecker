import About from "./About"
import Info from "./Info"

import styles from "@/styles/home/Home.module.scss"

export default function HomeContent() {
  return (
    <div className={styles.content}>
      <About />
      <Info />
    </div>
  )
}

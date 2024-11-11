import Blog from "./Blog"
import News from "./News"

import styles from "@/styles/home/Home.module.scss"

export default function Info() {
  return (
    <div className={styles.info}>
      <News />
      <Blog />
    </div>
  )
}

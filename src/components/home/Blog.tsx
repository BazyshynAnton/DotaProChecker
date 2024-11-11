import ContentHeader from "./ContentHeader"

import styles from "@/styles/home/Home.module.scss"

export default function Blog() {
  return (
    <div className={styles.blog}>
      <ContentHeader headerTitle="Blog" />
      <div className={styles.blog__content}>
        <p>
          11.11.2024
          <br /> Future updates:
          <br />
          &bull; Buildings map, Net worth graph for Match statistic.
          <br />
          &bull; Current Meta Heroes.
          <br />
          &bull; Player profile details and search.
        </p>
      </div>
    </div>
  )
}

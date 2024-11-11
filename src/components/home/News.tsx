import ContentHeader from "./ContentHeader"

import styles from "@/styles/home/Home.module.scss"

export default function News() {
  return (
    <div className={styles.news}>
      <ContentHeader headerTitle="News" />
    </div>
  )
}

import styles from "@/styles/home/Home.module.scss"
import ContentHeader from "./ContentHeader"

export default function DotaNews() {
  return (
    <div className={styles.dotaNews}>
      <ContentHeader headerTitle="Dota News" />
    </div>
  )
}

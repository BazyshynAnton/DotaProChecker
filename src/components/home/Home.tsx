import HomeContent from "./HomeContent"

import styles from "@/styles/home/Home.module.scss"

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <HomeContent />
    </div>
  )
}

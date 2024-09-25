import styles from "@/styles/home/Home.module.scss"
import HomeDescription from "./components/HomeDescription"

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <h1>dotachecker</h1>
      <HomeDescription />
    </div>
  )
}

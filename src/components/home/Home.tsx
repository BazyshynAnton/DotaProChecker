import styles from "@/styles/home/Home.module.scss"
import HomeDescription from "./components/HomeDescription"
import Image from "next/image"

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      {/* <h1>dotachecker</h1> */}
      {/* <Image
        src={"/pictures/dotaCheckerIcons/dc.png"}
        alt={"dotachecker"}
        width={500}
        height={500}
      /> */}
      <HomeDescription />
    </div>
  )
}

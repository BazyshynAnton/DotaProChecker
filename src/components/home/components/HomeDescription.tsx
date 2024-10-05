import FutureUpdates from "./FuturePlans"
import Warning from "./Warning"
import WhatAndWhy from "./WhatAndWhy"

import styles from "@/styles/home/Home.module.scss"

export default function HomeDescription() {
  return (
    <>
      <div className={styles.homeWrapper__description}>
        <h3>Dota 2 data platform</h3>
      </div>
      <WhatAndWhy />
      <FutureUpdates />
      <Warning />
    </>
  )
}

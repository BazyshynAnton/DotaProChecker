import { useAppDispatch, useAppSelector } from "@/shared/reduxImports"
import ContentHeader from "./ContentHeader"
import ProMatch from "./ProMatch"

import styles from "@/styles/home/Home.module.scss"
import { match } from "assert"

export default function ProMatches() {
  const { proMatches } = useAppSelector((store) => store.homeSlice)

  return (
    <div className={styles.proMatches}>
      <ContentHeader headerTitle="Professionals" />
      {proMatches && proMatches.map((match) => <ProMatch proMatch={match} />)}
    </div>
  )
}

import StatisticLoader from "../loaders/StatisticLoader"
import ContentHeader from "./ContentHeader"
import ProMatch from "./ProMatch"

import { useAppSelector } from "@/shared/reduxImports"

import styles from "@/styles/home/Home.module.scss"

export default function ProMatches() {
  const { proMatches } = useAppSelector((store) => store.homeSlice)

  return (
    <div className={styles.proMatches}>
      <ContentHeader headerTitle="Professional Matches" />
      <div className={styles.proMatches__content}>
        {proMatches ? (
          proMatches.map((match) => (
            <ProMatch key={match.match_id} proMatch={match} />
          ))
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StatisticLoader />
          </div>
        )}
      </div>
    </div>
  )
}

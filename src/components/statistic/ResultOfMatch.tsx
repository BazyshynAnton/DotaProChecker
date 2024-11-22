import { MatchDetailsUtility } from "@/utils/statistic/MatchDetailsUtility"
import { useAppSelector } from "@/shared/reduxImports"
import { useEffect, useState } from "@/shared/reactImports"

import type { MatchResult } from "@/types/statistic/matchDetails"

import styles from "@/styles/statistic/MatchDetails.module.scss"

export default function ResultOfMatch() {
  const { matchDetails, heroList } = useAppSelector(
    (store) => store.statisticSlice
  )

  const [resultOfMatch, setResultOfMatch] = useState<MatchResult>()

  useEffect(() => {
    if (matchDetails && heroList) {
      const uMatchDetails = MatchDetailsUtility.getInstance()
      setResultOfMatch(uMatchDetails.findMatchResult(matchDetails))
    }
  }, [heroList, matchDetails])

  const side = resultOfMatch?.resultOfMatch ? "RADIANT" : "DIRE"
  const sideColor = resultOfMatch?.resultOfMatch ? "#92A525" : "#C23C2A"

  return (
    <>
      <div className={styles.result}>
        <h4
          style={{
            color: sideColor,
          }}
        >
          TEAM {side} {"WIN"}
        </h4>
        <div className={styles.scoreAndTime}>
          <p className={styles.scoreAndTime__radiantScore}>
            {resultOfMatch?.radiantScore}
          </p>
          <p className={styles.scoreAndTime__duration}>
            {resultOfMatch?.matchDuration}
          </p>
          <p className={styles.scoreAndTime__direScore}>
            {resultOfMatch?.direScore}
          </p>
        </div>
      </div>
    </>
  )
}

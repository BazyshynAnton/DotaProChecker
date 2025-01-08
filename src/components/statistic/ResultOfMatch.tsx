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
  const sideColor = resultOfMatch?.resultOfMatch ? "#59ce8f" : "#df2e38"

  let teamName
  switch (side) {
    case "RADIANT": {
      teamName = matchDetails?.radiant_name
        ? `"${matchDetails.radiant_name}"`
        : side
      break
    }
    case "DIRE": {
      teamName = matchDetails?.dire_name ? `"${matchDetails.dire_name}"` : side
      break
    }
  }

  if (teamName === "") teamName = `"TBD"`

  return (
    <>
      <div className={styles.result}>
        <h4
          style={{
            color: sideColor,
          }}
        >
          TEAM {teamName} {"WIN"}
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

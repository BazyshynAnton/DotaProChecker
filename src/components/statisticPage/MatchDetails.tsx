import { MatchDetailsUtility } from "@/utils/statisticPage/MatchDetailsUtility"
import { useEffect, useState } from "@/components/shared/reactImports"
import { useSelector } from "@/components/shared/reduxImports"

import type { RootState } from "@/store/store"
import type {
  MatchResult,
  PlayersByTeam,
} from "@/types/staticPage/matchDetailsTypes"

import styles from "@/styles/statisticPage/MatchDetails.module.scss"
import PlayersTableDetails from "./reusableMatchDetails/PlayersTableDetails"

export default function MatchDetails() {
  const { matchDetails } = useSelector(
    (store: RootState) => store.statisticPageSlice
  )

  const [resultOfMatch, setResultOfMatch] = useState<MatchResult>()
  const [playersByTeam, setPlayersByTeam] = useState<PlayersByTeam>()
  useEffect(() => {
    if (matchDetails) {
      const mdUtility = new MatchDetailsUtility()
      setResultOfMatch(mdUtility.getMatchResult(86738694, matchDetails))
      setPlayersByTeam(mdUtility.filterPlayersByTeam(matchDetails))
    }
  }, [matchDetails])

  if (!playersByTeam) return <div>Loading...</div>

  return (
    <div className={styles.match}>
      <div className={styles.match__header}>
        <div className={styles.match__header__playedHero}></div>
        <div className={styles.match__result}>
          <h4
            style={{
              color: resultOfMatch?.resultOfMatch ? "#2eb872" : "#fa4659",
            }}
          >
            TEAM {resultOfMatch?.resultOfMatch ? "RADIANT" : "DIRE"} {"WIN"}
          </h4>
          <div className={styles.match__scoreAndTime}>
            <p className={styles.match__scoreAndTime__radiantScore}>
              {resultOfMatch?.radiantScore}
            </p>
            <p className={styles.match__scoreAndTime__duration}>
              {resultOfMatch?.matchDuration}
            </p>
            <p className={styles.match__scoreAndTime__direScore}>
              {resultOfMatch?.direScore}
            </p>
          </div>
        </div>
      </div>
      <PlayersTableDetails playersTeam={playersByTeam?.playersRadiant} />
      <PlayersTableDetails playersTeam={playersByTeam?.playersDire} />
    </div>
  )
}

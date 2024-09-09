import PlayersTableDetails from "@/components/statisticPage/components/reusableMatchDetails/tablePlayerDetails/TablePlayerDetails"
import ResultOfMatch from "./MatchResult"

import { MatchDetailsUtility } from "@/utils/statisticPage/MatchDetailsUtility"

import { useEffect, useState } from "@/shared/reactImports"
import { useAppSelector } from "@/shared/reduxImports"

import type { PlayersByTeam } from "@/types/staticPage/matchDetails"

import styles from "@/styles/statisticPage/MatchDetails.module.scss"

export default function MatchDetails() {
  const { matchDetails } = useAppSelector((store) => store.statisticPageSlice)

  const [playersByTeam, setPlayersByTeam] = useState<PlayersByTeam>()

  useEffect(() => {
    if (matchDetails) {
      const uMatchData = new MatchDetailsUtility()
      setPlayersByTeam(uMatchData.filterPlayersByTeam(matchDetails))
    }
  }, [matchDetails])

  if (!playersByTeam) return <div>Loading...</div>

  return (
    <div className={styles.match}>
      <div className={styles.match__header}>
        <ResultOfMatch />
      </div>
      <PlayersTableDetails playersTeam={playersByTeam?.playersRadiant} />
      <PlayersTableDetails playersTeam={playersByTeam?.playersDire} />
    </div>
  )
}

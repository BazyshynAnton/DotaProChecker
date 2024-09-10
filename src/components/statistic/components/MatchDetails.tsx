import TableDetails from "./reusableMatchDetails/tableDetails/TableDetails"
import ResultOfMatch from "./MatchResult"
import FetchError from "./FetchError"

import { MatchDetailsUtility } from "@/utils/statistic/MatchDetailsUtility"

import { useEffect, useState } from "@/shared/reactImports"
import { useAppSelector } from "@/shared/reduxImports"

import type { PlayersByTeam } from "@/types/statistic/matchDetails"

import styles from "@/styles/statistic/MatchDetails.module.scss"

export default function MatchDetails() {
  const { matchDetails } = useAppSelector((store) => store.statisticSlice)

  const [playersByTeam, setPlayersByTeam] = useState<PlayersByTeam>()

  useEffect(() => {
    if (matchDetails) {
      const uMatchData = new MatchDetailsUtility()
      setPlayersByTeam(uMatchData.filterPlayersByTeam(matchDetails))
    }
  }, [matchDetails])

  if (!playersByTeam)
    return <FetchError error="[Players] Something went wrong." />

  return (
    <div className={styles.match}>
      <div className={styles.match__header}>
        <ResultOfMatch />
      </div>
      <TableDetails playersTeam={playersByTeam?.playersRadiant} />
      <TableDetails playersTeam={playersByTeam?.playersDire} />
    </div>
  )
}

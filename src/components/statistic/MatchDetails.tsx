import TableDetails from "./tableDetails/TableDetails"
import ResultOfMatch from "./ResultOfMatch"
import StatisticLoader from "@/components/loaders/StatisticLoader"
import PicksBans from "./PicksBans"
import TableAbilities from "./tableAbilities/TableAbilities"

import { MatchDetailsUtility } from "@/utils/statistic/MatchDetailsUtility"

import { useEffect, useState } from "@/shared/reactImports"
import { useAppSelector } from "@/shared/reduxImports"

import type { PlayersByTeam } from "@/types/statistic/matchDetails"

import styles from "@/styles/statistic/MatchDetails.module.scss"

//
//
export default function MatchDetails() {
  const { matchDetails } = useAppSelector((store) => store.statisticSlice)

  const [playersByTeam, setPlayersByTeam] = useState<PlayersByTeam>()

  useEffect(() => {
    if (matchDetails) {
      const uMatchData = MatchDetailsUtility.getInstance()
      setPlayersByTeam(uMatchData.filterPlayersByTeam(matchDetails))
    }
  }, [matchDetails])

  if (!playersByTeam) return <StatisticLoader />

  return (
    <div className={styles.match}>
      <div className={styles.match__header}>
        <ResultOfMatch />
      </div>
      <TableDetails playersTeam={playersByTeam?.playersRadiant} />
      <PicksBans side={"radiant"} />
      <TableDetails playersTeam={playersByTeam?.playersDire} />
      <PicksBans side={"dire"} />
      <TableAbilities playersTeam={playersByTeam?.playersRadiant} />
      <TableAbilities playersTeam={playersByTeam?.playersDire} />
    </div>
  )
}

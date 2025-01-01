import { Link } from "@/shared/nextjsImports"
import { useAppDispatch } from "@/shared/reduxImports"
import { setIsTableDataExist, setMatchData } from "@/store/statisticSlice"
import { MatchDataUtility } from "@/utils/statistic/MatchDataUtility"

import type { ProMatch } from "@/types/home/homeDataUtility"

import styles from "@/styles/home/Home.module.scss"

export default function ProMatchCard({ proMatch }: { proMatch: ProMatch }) {
  const dispatch = useAppDispatch()

  const endTime = proMatch.start_time + proMatch.duration
  const now = Math.floor(Date.now() / 1000)
  const diffInSeconds = now - endTime
  const matchDurationMinutes = Math.floor(proMatch.duration / 60)
  const matchDurationSeconds = proMatch.duration % 60

  const handleOverviewClick = async () => {
    dispatch(setIsTableDataExist(true))
    const mID = proMatch.match_id
    const uMatchData = MatchDataUtility.getInstance()
    const matchData = await uMatchData.fetchMatchData(mID)
    dispatch(setMatchData(matchData))
    dispatch(setIsTableDataExist(false))
  }

  let formattedLeagueName =
    proMatch.league_name.length > 25
      ? proMatch.league_name.substring(0, 24) + "..."
      : proMatch.league_name
  const radiantName = proMatch.radiant_name ? proMatch.radiant_name : "TBD"
  const direName = proMatch.dire_name ? proMatch.dire_name : "TBD"

  return (
    <div className={styles.proMatchCard}>
      <div className={styles.proMatch__nameAndTeams}>
        <h4>{formattedLeagueName}</h4>
        <div className={styles.teams}>
          <span style={{ color: "#59ce8f" }}>{radiantName}</span>VS
          <span style={{ color: "#df2e38" }}>{direName}</span>
        </div>
      </div>
      <div className={styles.proMatch__info}>
        <p>
          ID: <span title="Copy!">{proMatch.match_id}</span>
        </p>
        <p>
          Duration:{" "}
          {`${matchDurationMinutes}:${matchDurationSeconds.toString().padStart(2, "0")}`}
        </p>
        <p>{timeAgo(diffInSeconds)}</p>
        <Link href={"/statistic"} onClick={handleOverviewClick}>
          overview
        </Link>
      </div>
    </div>
  )
}

function timeAgo(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(seconds / 3600)
  const days = Math.floor(seconds / 86400)

  if (seconds < 60) {
    return seconds === 1 ? "a second ago" : `${seconds} seconds ago`
  }
  if (minutes < 60) {
    return minutes === 1 ? "a minute ago" : `${minutes} minutes ago`
  }
  if (hours < 24) {
    return hours === 1 ? "an hour ago" : `${hours} hours ago`
  }
  return `${days} day${days > 1 ? "s" : ""} ago`
}

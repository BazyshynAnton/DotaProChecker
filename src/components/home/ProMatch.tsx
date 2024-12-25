import type { ProMatch } from "@/types/home/homeDataUtility"

import styles from "@/styles/home/Home.module.scss"

export default function ProMatch({ proMatch }: { proMatch: ProMatch }) {
  const startTime = proMatch.start_time
  const duration = proMatch.duration
  const endTime = startTime + duration
  const now = Math.floor(Date.now() / 1000)
  const diffInSeconds = now - endTime

  const matchDuration = (duration / 60).toFixed(2).replace(".", ":")

  return (
    <div className={styles.proMatch}>
      <h4>League: {proMatch.league_name}</h4>
      <div className={styles.teams}>
        <span style={{ color: "#59ce8f" }}>{proMatch.radiant_name}</span> VS{" "}
        <span style={{ color: "#df2e38" }}>{proMatch.dire_name}</span>
      </div>
      <p>ID: {proMatch.match_id}</p>
      <p>Duration: {matchDuration}</p>
      <p>{timeAgo(diffInSeconds)}</p>
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

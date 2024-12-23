import styles from "@/styles/home/Home.module.scss"

export default function ProMatch() {
  return (
    <div className={styles.proMatch}>
      <h4>{"league_name"}</h4>
      <div className={styles.teams}>
        {"radiant_name"} VS {"dire_name"}
      </div>
      <p>{"match_id"}</p>
      <p>{"duration"}</p>
      <p>{"start_time + duration = timePast"}</p>
    </div>
  )
}

import styles from "@/styles/statistic/FetchError.module.scss"

export default function ErrorExplanation() {
  return (
    <div className={styles.errorExplanation}>
      <p>
        &bull; Problem with internet connection.
        <br />
        &bull; Opendota API is not available at that moment [
        <a href="https://www.opendota.com/" target="blank">
          Check
        </a>
        ].
        <br />
        &bull; You reached your API calls limit [2000 calls per day].
        <br />
        &bull; Match ID does not exist.
      </p>
    </div>
  )
}

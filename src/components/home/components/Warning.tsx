import styles from "@/styles/home/Home.module.scss"

export default function Warning() {
  return (
    <div className={styles.homeWrapper__description__futureUpdates}>
      <h2>Warning.</h2>
      <p>
        <br />I am not responsible for profanity. <br />
        We all need to understand that no one can stop players from using
        profanity. Therefore, all nicknames have now been replaced with the word
        {' "'}Player{'"'}, and if a player has hidden match data, their nickname
        will be displayed as {'"'}Anonymous{'"'}.
        <br />
        <br />
        Bug report.
        <br />
        If you find an error, please let me know{" - "}
        <a href="mailto:bazyshyn.anton@gmail.com">bazyshyn.anton@gmail.com</a>
        <br />
      </p>
    </div>
  )
}

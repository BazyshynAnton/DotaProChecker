import ContentHeader from "./ContentHeader"

import styles from "@/styles/home/Home.module.scss"

export default function About() {
  return (
    <div className={styles.about}>
      <ContentHeader headerTitle="About" />
      <div className={styles.about__content}>
        <p>
          <br />
          This project was motivated by Advertising and annoying Steam
          Authorization on same Dota2 data platforms such as DotaBuff, Opendota,
          etc.
          <br />
          DotaChecker is an web-application where you can find match
          statistics(and more in the future updates).
          <br />
          I created DotaChecker because I have a passion for developing
          applications that can help people solve various problems.
          <br />
          <br />
          Some features and tech:
          <br />
          &bull; Use Match ID to get statistic about your match.
          <br />
          &bull; Application written using Next.js and TypeScript to ensure the
          best performance and type safety.
          <br />
          &bull; Does not have server side yet. If you update the page you lost
          your information.
        </p>

        <h2>Warning.</h2>
        <p>
          <br />I am not responsible for profanity. <br />
          We all need to understand that no one can stop players from using
          profanity. Therefore, all nicknames have now been replaced with the
          word
          {' "'}Player{'"'}, and if a player has hidden match data, his nickname
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
    </div>
  )
}

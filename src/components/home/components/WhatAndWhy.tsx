import styles from "@/styles/home/Home.module.scss"

export default function WhatAndWhy() {
  return (
    <div className={styles.homeWrapper__description__whatAndWhy}>
      <h2>What and Why.</h2>
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
    </div>
  )
}

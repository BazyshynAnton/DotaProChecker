import styles from "@/styles/home/Home.module.scss"

export default function FutureUpdates() {
  return (
    <div className={styles.description__futureUpdates}>
      <h2>Future updates and direction.</h2>
      <p>
        <br />
        I have some serious future plans.
        <br />
        <br />
        Firstly, one of mine primary motivations for developing DotaChecker is
        to help Dota2 players faster review their statistics with the best user
        experience. That means I am dedicated to ensuring that DotaChecker is
        stable and well-made product.
        <br />
        <br />
        Future updates:
        <br />
        &bull; Buildings map, Net worth graph for Match statistic.
        <br />
        &bull; Current Meta Heroes.
        <br />
        &bull; Player profile details and search.
      </p>
    </div>
  )
}

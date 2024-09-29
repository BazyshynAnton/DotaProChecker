import styles from "@/styles/footer/Footer.module.scss"

export default function DChecker() {
  const data = new Date()
  const year = data.getFullYear()

  return (
    <div className={styles.footer__dchecker}>
      <h3>dotachecker</h3>
      <p>
        © {year} DotaChecker. All rights reserved.
        <br /> Dota 2 is registered trademark of Valve Corporation.
      </p>
    </div>
  )
}

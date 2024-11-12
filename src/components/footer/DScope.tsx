import styles from "@/styles/footer/Footer.module.scss"

export default function DScope() {
  const data = new Date()
  const year = data.getFullYear()

  return (
    <div className={styles.footer__dscope}>
      <h3>dotascope</h3>
      <p>
        © {year} DotaScope. All rights reserved.
        <br /> Dota2 is registered trademark of Valve Corporation.
      </p>
    </div>
  )
}

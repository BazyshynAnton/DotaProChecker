import Image from "next/image"
import styles from "./InDevelopment.module.scss"

export default function InDevelopment() {
  return (
    <div className={styles.dev}>
      <div className={styles.dev__head}>
        <Image
          className={styles.dev__head__pic}
          src="/pictures/dotaHomePageIcons/indev.webp"
          alt="development"
          width={88}
          height={64}
          priority
        />
        <div className={styles.dev__head__kind}>
          <h3>page in development</h3>
          <span>
            <Image
              src="/pictures/dotaIcons/gold_symbol.webp"
              alt=""
              width={16}
              height={16}
            />
            <p>time!</p>
          </span>
        </div>
      </div>
    </div>
  )
}

"use client"
import { Image } from "@/shared/nextjsImports"

import styles from "./InDevelopment.module.scss"

export default function InDevelopment() {
  return (
    <div className={styles.dev}>
      <p>This page is still in development.</p>
      <Image
        src="/pictures/dotaScopeIcons/pudge_chuckle.webp"
        alt="chuckle"
        width={32}
        height={32}
      />
    </div>
  )
}

import ErrorExplanation from "./ErrorExplanation"

import { Image } from "@/shared/nextjsImports"
import { useState } from "@/shared/reactImports"

import styles from "@/styles/statistic/FetchError.module.scss"

export default function FetchError({ error }: { error: string }) {
  const [isHintOpen, setIsHintOpen] = useState(false)

  const handleHintClick = () => setIsHintOpen(!isHintOpen)

  return (
    <div className={styles.error}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "0.3rem" }}>
        <h2>Error {error}</h2>
        <Image
          src={"/pictures/dotaScopeIcons/enigma_error.gif"}
          alt={"enigma_error"}
          width={32}
          height={32}
        />
      </div>
      <span onClick={handleHintClick}>why you see this error </span>
      {isHintOpen && <ErrorExplanation />}
    </div>
  )
}

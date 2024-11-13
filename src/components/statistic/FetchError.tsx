import ErrorExplanation from "./ErrorExplanation"

import { useState } from "@/shared/reactImports"

import styles from "@/styles/statistic/FetchError.module.scss"

export default function FetchError({ error }: { error: string }) {
  const [isHintOpen, setIsHintOpen] = useState(false)

  const handleHintClick = () => setIsHintOpen(!isHintOpen)

  return (
    <div className={styles.error}>
      <h2>Error: {error}</h2>
      <span onClick={handleHintClick}>why you see this error</span>
      {isHintOpen && <ErrorExplanation />}
    </div>
  )
}

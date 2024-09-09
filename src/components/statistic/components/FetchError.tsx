import styles from "@/styles/statistic/FetchError.module.scss"

export default function FetchError({ error }: { error: string }) {
  return (
    <div>
      <h2>{error}</h2>
    </div>
  )
}

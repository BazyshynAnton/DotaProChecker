import styles from "@/styles/home/Home.module.scss"
import { NewsItem } from "@/types/home/homeDataUtility"

export default function DotaNewsCard({ newsItem }: { newsItem: NewsItem }) {
  const date = new Date(newsItem.date * 1000)
  return (
    <a href={newsItem.url} className={styles.dotaNewsCard} target="_blank">
      <h4>{newsItem.title}</h4>
      <div className={styles.newsDetails}>
        <p>{newsItem.feedlabel}</p>
        <p>Author: {newsItem.author}</p>
        <p>
          Date:{" "}
          {`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`}
        </p>
      </div>
    </a>
  )
}

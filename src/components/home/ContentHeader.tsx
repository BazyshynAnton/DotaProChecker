import styles from '@/styles/home/Home.module.scss'

export default function ContentHeader({ headerTitle }: { headerTitle: string }) {
  return (
    <div className={styles.contentHeader}>
      <h3>{headerTitle}</h3>
    </div>
  )
}

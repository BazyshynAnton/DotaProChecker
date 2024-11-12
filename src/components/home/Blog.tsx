import ContentHeader from "./ContentHeader"

import styles from "@/styles/home/Home.module.scss"

export default function Blog() {
    return (
        <div className={styles.blog}>
            <ContentHeader headerTitle="Blog" />
            <div className={styles.blog__content}>
                <p>Nothing yet!</p>
            </div>
        </div>
    )
}

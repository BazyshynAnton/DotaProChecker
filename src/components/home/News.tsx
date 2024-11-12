"use client"

import ContentHeader from "./ContentHeader"

import { Link } from "@/shared/nextjsImports"

import styles from "@/styles/home/Home.module.scss"

export default function News() {
    return (
        <div className={styles.news}>
            <ContentHeader headerTitle="News" />
            <div className={styles.news__content}>
                <div className={styles.post}>
                    <p>
                        New features for statistic:
                        <br />
                        &bull; picks and bans.(
                        <Link href="/statistic">see</Link>)
                        <br />
                        &bull; ability builds.(
                        <Link href="/statistic">see</Link>)
                        <br />
                    </p>
                    <span className={styles.post__date}>05.12.2024</span>
                </div>
            </div>
        </div>
    )
}

import { useSwiper } from "swiper/react"
import { useState, useEffect } from "@/shared/reactImports"
import styles from "@/styles/home/Home.module.scss"
import { DotaNews, NewsItem, ProMatch } from "@/types/home/homeDataUtility"

export default function CustomPagination({
  content,
}: {
  content: ProMatch[] | NewsItem[] | null | undefined
}) {
  const swiper = useSwiper()
  const [activeIndex, setActiveIndex] = useState(swiper.activeIndex)

  useEffect(() => {
    const handleSlideChange = () => {
      setActiveIndex(swiper.activeIndex)
    }

    swiper.on("slideChange", handleSlideChange)

    return () => {
      swiper.off("slideChange", handleSlideChange)
    }
  }, [swiper])

  if (!content) return
  let length = 0
  if (content.length > 10) {
    length = 10
  } else {
    length = content.length
  }
  const buttons = new Array(length).fill(0)

  return (
    <div className={styles.buttons}>
      {buttons.map((_, idx: number) => {
        return (
          <div
            className={`${
              activeIndex === idx ? styles.button_active : styles.button_nav
            }`}
            key={idx}
            onClick={() => {
              swiper.slideTo(idx)
            }}
          />
        )
      })}
    </div>
  )
}

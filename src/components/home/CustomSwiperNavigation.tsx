import { useSwiper } from "swiper/react"

import styles from "@/styles/home/Home.module.scss"

export default function CustomSwiperNavigation() {
  const swiper = useSwiper()

  return (
    <>
      <div
        className={styles.arrowLeft}
        onClick={() => swiper.slidePrev()}
      ></div>
      <div
        className={styles.arrowRight}
        onClick={() => swiper.slideNext()}
      ></div>
    </>
  )
}

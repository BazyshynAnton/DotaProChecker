import ProMatchCard from "./ProMatchCard"
import DotaNewsCard from "./DotaNewsCard"
import ContentHeader from "./ContentHeader"
import StatisticLoader from "../loaders/StatisticLoader"
import CustomPagination from "./CustomPagination"

import { useEffect, useState } from "@/shared/reactImports"
import { useAppSelector } from "@/hooks/useAppSelector"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import styles from "@/styles/home/Home.module.scss"

export default function InteractiveList({
  type,
  listHeader,
}: {
  type: string
  listHeader: string
}) {
  const { proMatches, dotaNews } = useAppSelector((store) => store.homeSlice)
  const news = dotaNews?.appnews.newsitems

  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth >= 1190)

      const handleResizeEvent = () => {
        setIsDesktop(window.innerWidth >= 1190)
      }

      window.addEventListener("resize", handleResizeEvent)
      return () => {
        window.removeEventListener("resize", handleResizeEvent)
      }
    }
  }, [])

  const [slidesNumber, setSlidesNumber] = useState(3)
  useEffect(() => {
    const handleSlidesNumberChange = () => {
      const width = window.innerWidth
      if (width <= 625) {
        setSlidesNumber(1)
      } else if (width <= 980) {
        setSlidesNumber(2)
      } else if (width <= 1190) {
        setSlidesNumber(3)
      } else {
        setSlidesNumber(3)
      }
    }

    handleSlidesNumberChange()
    window.addEventListener("resize", handleSlidesNumberChange)

    return () => {
      window.removeEventListener("resize", handleSlidesNumberChange)
    }
  }, [])

  return (
    <div
      className={type === "matchesList" ? styles.proMatches : styles.dotaNews}
    >
      <ContentHeader headerTitle={listHeader} />
      <Swiper slidesPerView={slidesNumber} grabCursor={true}>
        <div
          className={
            type === "matchesList"
              ? styles.proMatches__content
              : styles.dotaNews__content
          }
        >
          {type === "matchesList" ? (
            proMatches ? (
              proMatches.map((match, idx) => {
                if (idx <= 10) {
                  return isDesktop ? (
                    <ProMatchCard key={match.match_id} proMatch={match} />
                  ) : (
                    <SwiperSlide key={match.match_id}>
                      <ProMatchCard proMatch={match} />
                    </SwiperSlide>
                  )
                }
              })
            ) : (
              <Loader />
            )
          ) : news ? (
            news.map((el) => (
              <SwiperSlide key={el.gid}>
                <DotaNewsCard newsItem={el} />
              </SwiperSlide>
            ))
          ) : (
            <Loader />
          )}
        </div>
        <CustomPagination
          content={type === "matchesList" ? proMatches : news}
        />
      </Swiper>
    </div>
  )
}

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatisticLoader />
    </div>
  )
}

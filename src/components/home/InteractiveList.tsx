import ProMatchCard from './ProMatchCard'
import DotaNewsCard from './DotaNewsCard'
import ContentHeader from './ContentHeader'
import StatisticLoader from '../loaders/StatisticLoader'

import { useEffect, useState } from '@/shared/reactImports'
import { useAppSelector } from '@/hooks/useAppSelector'

import styles from '@/styles/home/Home.module.scss'

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
    if (typeof window !== 'undefined') {
      setIsDesktop(window.innerWidth >= 1190)

      const handleResizeEvent = () => {
        setIsDesktop(window.innerWidth >= 1190)
      }

      window.addEventListener('resize', handleResizeEvent)
      return () => {
        window.removeEventListener('resize', handleResizeEvent)
      }
    }
  }, [])

  return (
    <div className={type === 'matchesList' ? styles.proMatches : styles.dotaNews}>
      <ContentHeader headerTitle={listHeader} />

      <div
        className={type === 'matchesList' ? styles.proMatches__content : styles.dotaNews__content}
      >
        {type === 'matchesList' ? (
          proMatches ? (
            proMatches.map((match, idx) => {
              return <ProMatchCard key={match.match_id} proMatch={match} />
            })
          ) : (
            <Loader />
          )
        ) : news ? (
          news.map((el) => <DotaNewsCard key={el.gid} newsItem={el} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

function Loader() {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StatisticLoader />
    </div>
  )
}

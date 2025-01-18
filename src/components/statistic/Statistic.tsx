'use client'

import MatchDetails from './MatchDetails'
import MatchSideInfo from './MatchSideInfo'
import Search from './Search'
import StatisticLoader from '@/components/loaders/StatisticLoader'

import { useEffect, useState } from '@/shared/reactImports'
import { useAppSelector, useAppDispatch } from '@/shared/reduxImports'
import { setIsTableDataExist, setMatchData } from '@/store/statisticSlice'

import type { MatchData } from '@/types/redux/statisticSlice'

export default function Statistic({ matchData }: { matchData: MatchData | string }) {
  const { isTableDataExist, error } = useAppSelector((store) => store.statisticSlice)
  const dispatch = useAppDispatch()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!isTableDataExist) {
      dispatch(setMatchData(matchData))
    } else {
      dispatch(setIsTableDataExist(false))
    }

    const delay = async () => {
      await dataLoadingDelay()
      setIsReady(true)
    }

    delay()
  }, [dispatch, matchData])

  if (error) throw Error(error) // Error handling

  return (
    <div style={{ width: '100%' }}>
      <Search />
      {isReady ? (
        <>
          <MatchSideInfo />
          <MatchDetails />
        </>
      ) : (
        <StatisticLoader />
      )}
    </div>
  )
}

async function dataLoadingDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 100)
  })
}

'use client'

import MatchDetails from './MatchDetails'
import MatchSideInfo from './MatchSideInfo'
import Search from './Search'
import DataLoader from '@/components/loaders/DataLoader'

import { useEffect } from '@/shared/reactImports'
import { useAppSelector, useAppDispatch } from '@/shared/reduxImports'
import { setIsTableDataExist, setMatchData, setTableLoading } from '@/store/statisticSlice'

import type { MatchData } from '@/types/redux/statisticSlice'

export default function Statistic({ matchData }: { matchData: MatchData | string }) {
  const { tableLoading, isTableDataExist, error } = useAppSelector((store) => store.statisticSlice)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isTableDataExist) {
      dispatch(setMatchData(matchData))

      const delay = async () => {
        dispatch(setTableLoading(false)) // activate loading
        await dataLoadingDelay(100)
        dispatch(setTableLoading(true)) // disable loading
      }

      delay()
    } else {
      const delay = async () => {
        dispatch(setTableLoading(false))
        await dataLoadingDelay(3000)
        dispatch(setTableLoading(true))
      }

      delay()
      dispatch(setIsTableDataExist(false))
    }
  }, [dispatch, matchData])

  if (error !== null) throw Error(error) // Error handling

  return (
    <div style={{ width: '100%' }}>
      <Search />
      {tableLoading ? (
        <>
          <MatchSideInfo />
          <MatchDetails />
        </>
      ) : (
        <DataLoader />
      )}
    </div>
  )
}

async function dataLoadingDelay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

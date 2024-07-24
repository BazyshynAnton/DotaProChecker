import React from 'react'

interface DotaAPI {
  dotaData: {
    matchHistory: number[]
    heroesList: number[]
  }
}

export default function StatisticPage({ dotaData }: DotaAPI) {
  console.log(dotaData)

  const matches = dotaData.matchHistory || []

  return <div></div>
}

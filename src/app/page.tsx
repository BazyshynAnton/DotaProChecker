import StatisticPage from '@/components/statisticPage/StatisticPage'

interface Match {
  result: {
    status: number
    num_results: number
    total_results: number
    results_remaining: number
    matches: [
      {
        match_id: number
        match_seq_num: number
        start_time: number
        lobby_type: number
        radiant_team_id: number
        dire_team_id: number

        players: [
          {
            account_id: number
            player_slot: number
            team_number: number
            team_slot: number
            hero_id: number
            hero_variant: number
          }
        ]
      }
    ]
  }
}

const getMatchData = async () => {
  const responseMatchHistory = fetch(
    'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key=3F8B2C146EB3A63816DE36C34A2F95E0&account_id=380571223'
  )

  const dataMatchHistory: Promise<Match> = (await responseMatchHistory).json()

  const matchHistoryIDs: number[] = (await dataMatchHistory).result.matches.map(
    (match) => match.match_id
  )
}

;`http://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1/?key=3F8B2C146EB3A63816DE36C34A2F95E0&match_id=2638507303`

export default async function Home() {
  const dotaData = await getDotaData()
  console.log(dotaData)
  return <StatisticPage dotaData={dotaData} />
}

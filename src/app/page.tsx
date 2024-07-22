import StatisticPage from '@/components/statisticPage/StatisticPage'
import axios, { AxiosResponse } from 'axios'

export async function handler(): Promise<AxiosResponse<any, any> | null> {
  try {
    const response = await axios.get(
      'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v1/',
      {
        params: {
          key: '<3F8B2C146EB3A63816DE36C34A2F95E0>',
          access_token:
            'eyAidHlwIjogIkpXVCIsICJhbGciOiAiRWREU0EiIH0.eyAiaXNzIjogInI6MTY3QV8yNDFCRDNDOF9ERkM2QSIsICJzdWIiOiAiNzY1NjExOTgzNDA4MzY5NTEiLCAiYXVkIjogWyAid2ViOnN0b3JlIiBdLCAiZXhwIjogMTcyMTcyNzcxNCwgIm5iZiI6IDE3MTMwMDA3NzMsICJpYXQiOiAxNzIxNjQwNzczLCAianRpIjogIjBGOTNfMjRDMDk4RDdfNkU1QTMiLCAib2F0IjogMTcxMDg2MTc3OSwgInJ0X2V4cCI6IDE3Mjg5MTY3NjMsICJwZXIiOiAwLCAiaXBfc3ViamVjdCI6ICI0Ni4xNTAuMTAuNzYiLCAiaXBfY29uZmlybWVyIjogIjQ2LjE1MC4xMC43NiIgfQ.iqxauloWZ1_09zOqjltuGQWfFiOjtz5Qmiov4wS9HgJM0ey7aRm8117-qMOnsSCgVKt1Z0UTqQRiBgefuZ3WBQ',
        },
      }
    )
    console.log(response.data)
    return response
  } catch (error) {
    console.error(error)
    console.error('Failed to fetch data from Steam API')
    return null
  }
}

export default async function Home() {
  const response: AxiosResponse<any, any> | null = await handler()

  if (response === null) {
    console.log('Error: response === NULL')
    return <StatisticPage />
  }

  const data = response.data
  console.log('data:', data)

  return <StatisticPage />
}

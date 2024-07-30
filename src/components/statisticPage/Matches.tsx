// "use client"
// import { RootState } from "@/store/store"
// import { useSelector } from "react-redux"

// export default function Matches() {
//   const { matchesDetails, matchesHistoryIDs } = useSelector(
//     (store: RootState) => store.statisticPageSlice
//   )

//   if (matchesDetails === null) return <div></div>

//   const onlyMatches = matchesDetails.players

//   return (
//     <div>
//       {onlyMatches.map((match, idx) => (
//         <div key={idx}>{match.gold_per_min}</div>
//       ))}
//     </div>
//   )
// }

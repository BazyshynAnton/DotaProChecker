import { useAppDispatch, useAppSelector } from "@/shared/reduxImports"
import { setSearch } from "@/store/statisticSlice"
import { ChangeEvent } from "react"

import styles from "@/styles/statistic/Search.module.scss"

export default function Search() {
  const { search } = useAppSelector((store) => store.statisticSlice)
  const dispatch = useAppDispatch()

  const handleInputChange =
    (type: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value

      dispatch(setSearch({ type, value }))
    }

  const handleButtonSubmit = () => {}

  return (
    <form className={styles.search}>
      <div className={styles.search__inputs}>
        <input
          type="number"
          value={search.matchID}
          placeholder="Match ID"
          onChange={handleInputChange("matchID")}
        />
      </div>
      <button type="submit">search</button>
    </form>
  )
}

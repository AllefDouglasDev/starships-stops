import { Input, StarshipList } from 'components'
import { Definitions } from 'core/types'
import { useSelector } from 'hooks'
import { useEffect, useState } from 'react'
import { useAppDispatch } from 'store'
import {
  selectGetAllStarships,
  selectGetAllStarshipsIsLoading,
} from 'store/starships/getAll/selectors'
import { getAllStarships } from 'store/starships/getAll/thunk'

export default function Home() {
  const dispatch = useAppDispatch()

  const [distance, setDistance] = useState(1)

  const starships = useSelector(selectGetAllStarships)
  const starshipsIsLoading = useSelector(selectGetAllStarshipsIsLoading)

  useEffect(() => {
    dispatch(getAllStarships())
  }, [])

  return (
    <div>
      {starshipsIsLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Input
            label="Distance in MGLT"
            type="number"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />

          <StarshipList
            starships={starships as Definitions['Starships'][]}
            distance={distance}
          />
        </>
      )}
    </div>
  )
}

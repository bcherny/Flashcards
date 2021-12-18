import {useState} from 'react'
import {getDecks} from '../services/db'
import {Deck} from '../types'

export default function useDecks(
  collectionID: string
): [boolean, readonly Deck[]] {
  const [data, setData] = useState<readonly Deck[]>([])
  const [isLoading, setIsLoading] = useState(true)
  getDecks(collectionID).then((_) => {
    setData(_)
    setIsLoading(false)
  })
  return [isLoading, data]
}

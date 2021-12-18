import {useState} from 'react'
import {getCollections} from '../services/db'
import {Collection} from '../types'

export default function useCollections(): [boolean, readonly Collection[]] {
  const [data, setData] = useState<readonly Collection[]>([])
  const [isLoading, setIsLoading] = useState(true)
  getCollections().then((_) => {
    setData(_)
    setIsLoading(false)
  })
  return [isLoading, data]
}

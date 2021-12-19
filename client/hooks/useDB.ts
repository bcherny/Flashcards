import {useEffect, useState} from 'react'
import type {Folder} from '../../shared/types'

import Constants from 'expo-constants'

const manifest = Constants.manifest as any

const API = manifest.debuggerHost.split(`:`).shift()
console.log('manifest', manifest.debuggerHost, `https://${API}:3000/api/cards`)

export function useDB(): Folder | null {
  const [data, setData] = useState<Folder | null>(null)

  useEffect(() => {
    fetchFromServer()
  }, [])

  async function fetchFromServer() {
    try {
      const response = await fetch(`https://${API}:3000/api/cards`)
      const json = await response.json()
      setData(json.data)
    } catch (e) {
      console.error((e as any).message)
    }
  }

  return data
}

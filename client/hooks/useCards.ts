import {Card, Folder} from '../../shared/types'
import useFolders from './useFolders'

export default function useCards(folderID: string): readonly Card[] {
  const folders = useFolders()
  if (!folders.length) {
    return []
  }
  const folder = folders.find((_) => _.id === folderID)
  if (!folder) {
    throw ReferenceError(`Unable to find folder with id "${folderID}"`)
  }
  return folder.contents.filter(isCard)
}

function isCard(a: Folder | Card): a is Card {
  return a.type === 'card'
}

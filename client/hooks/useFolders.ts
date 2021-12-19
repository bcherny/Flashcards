import {Card, Folder} from '../../shared/types'
import {useDB} from './useDB'

export default function useFolders(rootID?: string): readonly Folder[] {
  const data = useDB()
  if (!data) {
    return []
  }
  if (rootID === undefined) {
    return getFolders(data)
  }
  const root = find(data, (_) => _.id === rootID)
  if (!root) {
    throw ReferenceError(`Unable to find folder with id "${rootID}"`)
  }
  return getFolders(root)
}

function find(folder: Folder, f: (folder: Folder) => boolean): Folder | null {
  if (f(folder)) {
    return folder
  }
  for (const item of folder.contents) {
    if (!isFolder(item)) {
      continue
    }
    const isFound = find(item, f)
    if (isFound) {
      return item
    }
  }
  return null
}

function getFolders(folder: Folder): Folder[] {
  return [folder, ...folder.contents.filter(isFolder).flatMap(getFolders)]
}

function isFolder(a: Folder | Card): a is Folder {
  return a.type === 'folder'
}

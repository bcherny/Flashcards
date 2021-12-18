import {readFile, writeFile} from 'fs/promises'
import {isPlainObject} from 'lodash'
import {join} from 'path'
import uuid from 'short-uuid'

const STORE_PATH = join(__dirname, './store.json')

type Folder = {
  id: string
  type: 'folder'
  title: string
  contents: (Card | Folder)[]
}

type Card = {
  id: string
  type: 'card'
  front: {
    [k: string]: string
  }
  back: {
    [k: string]: string
  }
}

export async function getRootFolder(): Promise<Folder> {
  return JSON.parse(await readFile(STORE_PATH, {encoding: 'utf8'}))
}

export async function createCard(
  folderID: string,
  front: {
    [k: string]: string
  },
  back: {
    [k: string]: string
  }
): Promise<Card> {
  const rootFolder = await getRootFolder()
  const folderIDs = getFolderIDs(rootFolder)

  // Validate
  if (!folderIDs.includes(folderID)) {
    throw ReferenceError(
      `Passed invalid folderID "${folderID}". Expected one of: ${folderIDs}`
    )
  }
  if (!isPlainObject(back) || !Object.keys(back).length) {
    throw RangeError(
      'Expected at least one key for the back of the card, but got no keys'
    )
  }
  if (!isPlainObject(front) || !Object.keys(front).length) {
    throw RangeError(
      'Expected at least one key for the front of the card, but got no keys'
    )
  }

  // Create card
  const card: Card = {
    id: uuid().new(),
    type: 'card',
    front,
    back,
  }

  // Insert it
  await addNewCardToDB(card, folderID, rootFolder)

  return card
}

// Very inefficient but simple insert
async function addNewCardToDB(
  card: Card,
  folderID: string,
  rootFolder: Folder
): Promise<void> {
  if (rootFolder.id === folderID) {
    rootFolder.contents.push(card)
    await writeFile(STORE_PATH, JSON.stringify(rootFolder, null, 2))
    return
  }
  rootFolder.contents
    .filter(isFolder)
    .forEach((_) => addNewCardToDB(card, folderID, rootFolder))
}

function getFolderIDs(folder: Folder): string[] {
  return [folder.id, ...folder.contents.filter(isFolder).flatMap(getFolderIDs)]
}

function isFolder(a: Card | Folder): a is Folder {
  return a.type === 'folder'
}

import {readFile, writeFile} from 'fs/promises'
import {isPlainObject} from 'lodash'
import {join} from 'path'
import {sha1} from './utils'

const STORE_PATH = join(__dirname, './store.json')
const ID_SEPARATOR = '---'

type Folder = {
  id: string
  type: 'folder'
  title: string
  contents: (Card | Folder)[]
}

type CardData = {
  [k: string]: string
}

type Card = {
  id: string
  type: 'card'
  front: CardData
  back: CardData
}

export async function getRootFolder(): Promise<Folder> {
  return JSON.parse(await readFile(STORE_PATH, {encoding: 'utf8'}))
}

export async function createCard(
  folderID: string,
  front: CardData,
  back: CardData
): Promise<Card> {
  const cardID = sha1(
    folderID +
      ID_SEPARATOR +
      JSON.stringify(front) +
      ID_SEPARATOR +
      JSON.stringify(back)
  )

  // Validate
  validateCardData(back)
  validateCardData(front)
  await validateNewCardID(cardID)

  // Create card
  const card: Card = {
    id: cardID,
    type: 'card',
    front,
    back,
  }

  // Insert it
  await addNewCardToDB(card, folderID)

  return card
}

export async function updateCard(
  cardID: string,
  front: CardData,
  back: CardData
): Promise<Card> {
  // Validate
  validateCardData(back)
  validateCardData(front)

  // Create card
  const card: Card = {
    id: cardID,
    type: 'card',
    front,
    back,
  }

  // Update it
  await updateCardInDB(card)

  return card
}

// Very inefficient & unreliable but simple update
async function updateCardInDB(card: Card): Promise<void> {
  const rootFolder = await getRootFolder()

  // Update reference in memory
  function update(folder: Folder): boolean {
    for (const c of folder.contents.filter(isCard)) {
      if (c.id === card.id) {
        c.back = card.back
        c.front = card.front
        return true
      }
    }

    for (const f of rootFolder.contents.filter(isFolder)) {
      if (update(f)) {
        return true
      }
    }
    return false
  }

  // Check result
  const result = update(rootFolder)
  if (!result) {
    const cardIDs = getFolderIDs(rootFolder)
    throw ReferenceError(
      `Passed invalid cardID "${card.id}". Expected one of: ${cardIDs}`
    )
  }

  // Persist to fs
  await writeFile(STORE_PATH, JSON.stringify(rootFolder, null, 2))
}

// Very inefficient & unreliable but simple insert
async function addNewCardToDB(card: Card, folderID: string): Promise<void> {
  const rootFolder = await getRootFolder()

  // Update in memory
  function add(folder: Folder): boolean {
    if (folder.id === folderID) {
      folder.contents.push(card)
      return true
    }
    for (const folder of rootFolder.contents.filter(isFolder)) {
      if (add(folder)) {
        return true
      }
    }
    return false
  }

  // Check result
  const result = add(rootFolder)
  if (!result) {
    const folderIDs = getFolderIDs(rootFolder)
    throw ReferenceError(
      `Unable to find invalid folderID "${folderID}". Expected one of: ${folderIDs}`
    )
  }

  // Persist to fs
  await writeFile(STORE_PATH, JSON.stringify(rootFolder, null, 2))
}

function getCardIDs(folder: Folder): string[] {
  return [
    ...folder.contents.filter(isCard).map((_) => _.id),
    ...folder.contents.filter(isFolder).flatMap(getCardIDs),
  ]
}

function getFolderIDs(folder: Folder): string[] {
  return [folder.id, ...folder.contents.filter(isFolder).flatMap(getFolderIDs)]
}

function isCard(a: Card | Folder): a is Card {
  return a.type === 'card'
}

function isFolder(a: Card | Folder): a is Folder {
  return a.type === 'folder'
}

function validateCardData(data: {}): void {
  if (!isPlainObject(data) || !Object.keys(data).length) {
    throw RangeError('Expected at least one key in card data, but got no keys')
  }
}

async function validateNewCardID(cardID: string): Promise<void> {
  const rootFolder = await getRootFolder()
  const cardIDs = getCardIDs(rootFolder)
  if (cardIDs.includes(cardID)) {
    throw new DuplicateCardError(
      `Card with ID ${cardID} already exists in the database!`
    )
  }
}

class DuplicateCardError extends ReferenceError {}

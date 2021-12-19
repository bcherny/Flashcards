export type Folder = {
  id: string
  type: 'folder'
  title: string
  contents: (Card | Folder)[]
}

export type CardData = {
  [k: string]: string
}

export type Card = {
  id: string
  type: 'card'
  front: CardData
  back: CardData
}

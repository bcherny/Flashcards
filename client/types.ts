export type CardDefinition = {
  front: string
  back: string
}

export type Collection = {
  id: string
  name: string
}

export type Deck = {
  id: string
  name: string
}

export type Card = {
  back: {
    text: string
  }
  front: {
    text: string
  }
}

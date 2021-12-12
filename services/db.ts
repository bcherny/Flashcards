import {FirebaseApp, initializeApp} from 'firebase/app'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import Constants from '../constants'
import {Collection, Deck} from '../types'

const FIREBASE_CONFIG = {
  apiKey: Constants.FIREBASE_API_KEY,
  authDomain: 'flashcards-eaf85.firebaseapp.com',
  projectId: 'flashcards-eaf85',
  storageBucket: 'flashcards-eaf85.appspot.com',
  messagingSenderId: '939435079514',
  appId: '1:939435079514:web:eca640e0c73b5597d56563',
}

export function getApp(): FirebaseApp {
  return initializeApp(FIREBASE_CONFIG)
}

export async function getCollections(): Promise<readonly Collection[]> {
  const app = getApp()
  const firestore = getFirestore(app)
  const docs = await getDocs(collection(firestore, 'collections'))
  return docs.docs.map((_) => ({id: _.id, ..._.data()})) as Collection[]
}

export async function getDecks(collectionID: string): Promise<readonly Deck[]> {
  const app = getApp()
  const firestore = getFirestore(app)
  console.log('before get', collectionID)
  const decks = await getDocs(
    collection(firestore, 'collections', collectionID, 'decks')
  )
  console.log('decks', decks)
  return decks.docs.map((_) => ({id: _.id, ..._.data()})) as Deck[]
}

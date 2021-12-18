import {createNativeStackNavigator} from '@react-navigation/native-stack'

export type RootStackParamList = {
  Cards: {name: string}
  Collections: undefined
  Decks: {collectionID: string; name: string}
}

export const Stack = createNativeStackNavigator<RootStackParamList>()

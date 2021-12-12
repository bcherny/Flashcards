import {createNativeStackNavigator} from '@react-navigation/native-stack'

export type RootStackParamList = {
  Decks: undefined
  Game: {name: string}
  Lobby: {name: string}
}

export const Stack = createNativeStackNavigator<RootStackParamList>()

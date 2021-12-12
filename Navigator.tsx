import {createNativeStackNavigator} from '@react-navigation/native-stack'

export type RootStackParamList = {
  Cards: {name: string}
  Collections: undefined
  Decks: {name: string}
}

export const Stack = createNativeStackNavigator<RootStackParamList>()

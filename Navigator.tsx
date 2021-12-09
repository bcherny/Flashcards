import {createNativeStackNavigator} from '@react-navigation/native-stack'

export type RootStackParamList = {
  Game: {name: string}
  Lobby: undefined
}

export const Stack = createNativeStackNavigator<RootStackParamList>()

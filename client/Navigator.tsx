import {createNativeStackNavigator} from '@react-navigation/native-stack'

export type RootStackParamList = {
  Cards: {title: string}
  Folders: undefined
  Decks: {folderID: string; title: string}
}

export const Stack = createNativeStackNavigator<RootStackParamList>()

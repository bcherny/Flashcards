import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native'
import {RootStackParamList} from '../Navigator'

type Props = NativeStackScreenProps<RootStackParamList, 'Lobby'>

const DATA = [
  {text: 'Chapter 1', key: 'chapter-1'},
  {text: 'Chapter 2', key: 'chapter-2'},
]

export default function Menu({navigation}: Props): React.ReactElement {
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => (
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('Game', {id: item.key})}
        >
          <View>
            <Text style={styles.item}>{item.text}</Text>
          </View>
        </TouchableNativeFeedback>
      )}
    />
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

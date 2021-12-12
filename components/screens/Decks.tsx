import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import {RootStackParamList} from '../../Navigator'

type Props = NativeStackScreenProps<RootStackParamList, 'Decks'>

const DATA = [{name: 'Chapter 1'}, {name: 'Chapter 2'}]

export default function Decks({navigation}: Props): React.ReactElement {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(_) => _.name}
      renderItem={({item: {name}}) => (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Cards', {name})}
        >
          <Text style={styles.item}>{name}</Text>
        </TouchableWithoutFeedback>
      )}
    />
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

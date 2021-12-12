import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {FlatList, StyleSheet, Text, TouchableNativeFeedback} from 'react-native'
import {RootStackParamList} from '../../Navigator'

type Props = NativeStackScreenProps<RootStackParamList, 'Decks'>

const DATA = [{name: 'CCSF Japanese 1A'}]

export default function Decks({navigation}: Props): React.ReactElement {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(_) => _.name}
      renderItem={({item: {name}}) => (
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('Lobby', {name})}
        >
          <Text style={styles.item}>{name}</Text>
        </TouchableNativeFeedback>
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

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

const DATA = [{name: 'Chapter 1'}, {name: 'Chapter 2'}]

export default function Menu({navigation}: Props): React.ReactElement {
  return (
    <FlatList
      data={DATA}
      renderItem={({item: {name}}) => (
        <TouchableNativeFeedback
          key={name}
          onPress={() => navigation.navigate('Game', {name})}
        >
          <View>
            <Text style={styles.item}>{name}</Text>
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

import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React, {useState} from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import SkeletonContent from 'react-native-skeleton-content'
import useCollections from '../../hooks/useCollections'
import {RootStackParamList} from '../../Navigator'
import {getCollections} from '../../services/db'
import {Collection} from '../../types'

type Props = NativeStackScreenProps<RootStackParamList, 'Collections'>

export default function Collections({navigation}: Props): React.ReactElement {
  const [isLoading, data] = useCollections()
  return (
    <SkeletonContent isLoading={isLoading} containerStyle={styles.skeleton}>
      <FlatList
        data={data}
        keyExtractor={(_) => _.name}
        renderItem={({item: {name}}) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Decks', {name})}
          >
            <Text style={styles.item}>{name}</Text>
          </TouchableWithoutFeedback>
        )}
      />
    </SkeletonContent>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  skeleton: {
    flex: 1,
  },
})

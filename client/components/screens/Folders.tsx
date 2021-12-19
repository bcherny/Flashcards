import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React, {useState} from 'react'
import {FlatList, StyleSheet, Text, TouchableNativeFeedback} from 'react-native'
import SkeletonContent from 'react-native-skeleton-content'
import useFolders from '../../hooks/useFolders'
import {RootStackParamList} from '../../Navigator'

type Props = NativeStackScreenProps<RootStackParamList, 'Folders'>

export default function Folders({navigation}: Props): React.ReactElement {
  const data = useFolders()
  return (
    <SkeletonContent isLoading={!data.length} containerStyle={styles.skeleton}>
      <FlatList
        data={data}
        keyExtractor={(_) => _.title}
        renderItem={({item: {id, title}}) => (
          <TouchableNativeFeedback
            onPressOut={() =>
              navigation.navigate('Decks', {folderID: id, title})
            }
          >
            <Text style={styles.item}>{title}</Text>
          </TouchableNativeFeedback>
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

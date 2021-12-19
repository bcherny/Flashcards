import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import SkeletonContent from 'react-native-skeleton-content'
import useFolders from '../../hooks/useFolders'
import {RootStackParamList} from '../../Navigator'

type Props = NativeStackScreenProps<RootStackParamList, 'Decks'>

export default function Decks({navigation, route}: Props): React.ReactElement {
  const data = useFolders(route.params.folderID)
  return (
    <SkeletonContent isLoading={!data.length} containerStyle={styles.skeleton}>
      <FlatList
        data={data}
        keyExtractor={(_) => _.title}
        renderItem={({item: {title}}) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Cards', {title})}
          >
            <Text style={styles.item}>{title}</Text>
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

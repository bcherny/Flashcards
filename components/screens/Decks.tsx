import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import SkeletonContent from 'react-native-skeleton-content'
import useDecks from '../../hooks/useDecks'
import {RootStackParamList} from '../../Navigator'

type Props = NativeStackScreenProps<RootStackParamList, 'Decks'>

export default function Decks({navigation, route}: Props): React.ReactElement {
  const [isLoading, data] = useDecks(route.params.collectionID)
  return (
    <SkeletonContent isLoading={isLoading} containerStyle={styles.skeleton}>
      <FlatList
        data={data}
        keyExtractor={(_) => _.name}
        renderItem={({item: {name}}) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Cards', {name})}
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

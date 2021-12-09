import React from 'react'
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet'
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native'

type Props = {
  onPressEditCard(): void
  onPressNewGame(): void
}

const SNAP_POINTS = ['5%', '20%']

export default function Menu({
  onPressEditCard,
  onPressNewGame,
}: Props): React.ReactElement {
  const MENU_ITEMS = React.useMemo(
    () => [
      {onPress: onPressEditCard, text: 'Edit card'},
      {onPress: onPressNewGame, text: 'New game'},
    ],
    []
  )

  return (
    <BottomSheet snapPoints={SNAP_POINTS}>
      <BottomSheetFlatList
        data={MENU_ITEMS}
        keyExtractor={(_) => _.text}
        renderItem={({item: {onPress, text}}) => (
          <TouchableWithoutFeedback onPress={onPress}>
            <Text style={styles.item}>{text}</Text>
          </TouchableWithoutFeedback>
        )}
      />
    </BottomSheet>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

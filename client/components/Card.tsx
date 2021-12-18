import React from 'react'
import {
  GestureResponderEvent,
  PanResponderGestureState,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'

type Props = {
  onSwipeLeft?: (state: PanResponderGestureState) => void
  onSwipeRight?: (state: PanResponderGestureState) => void
  onPress?: (e: GestureResponderEvent) => void
  text: string
}

export default function Card({
  onSwipeLeft = () => {},
  onSwipeRight = () => {},
  onPress = () => {},
  text,
}: Props): React.ReactElement {
  return (
    <GestureRecognizer
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      style={styles.root}
    >
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableWithoutFeedback>
    </GestureRecognizer>
  )
}

const styles = StyleSheet.create({
  root: {
    borderColor: '#222',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 8,
    shadowColor: '#eee',
    shadowOpacity: 0.9,
    shadowOffset: {height: 8, width: 8},
    height: 200,
    margin: 20,
    paddingHorizontal: 24,
    // flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '800',
    fontSize: 64,
  },
})

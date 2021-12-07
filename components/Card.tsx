import React from 'react'
import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native'

type Props = {
  onTouchEnd(e: GestureResponderEvent): void
  text: string
}

export default function Card({onTouchEnd, text}: Props) {
  return (
    <View onTouchEnd={onTouchEnd} style={styles.root}>
      <Text style={styles.text}>{text}</Text>
    </View>
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

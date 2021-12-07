import React from 'react'
import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native'

type Props = {
  onTouchEnd(e: GestureResponderEvent): void
  text: string
}

export default function Button({onTouchEnd, text}: Props) {
  return (
    <Button onTouchEnd={onTouchEnd} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#222',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 8,
    shadowColor: '#eee',
    shadowOpacity: 0.9,
    shadowOffset: {height: 8, width: 8},
    height: 200,
    margin: 12,
    paddingHorizontal: 24,
    // flex: 0,
    backgroundColor: '#fff',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '800',
    fontSize: 64,
  },
})

import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

type Props = {
  onPressNewGame(): void
}

export default function EndCard({onPressNewGame}: Props) {
  return (
    <View onTouchEnd={onPressNewGame}>
      <View style={styles.root}>
        <Text style={styles.text}>終わり!</Text>
        <View style={styles.cta}>
          <Text style={styles.ctaText}>Tap anywhere to start</Text>
        </View>
      </View>
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
    position: 'relative',
    // flex: 0,
    backgroundColor: 'limegreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cta: {
    borderBottomColor: '#222',
    borderBottomWidth: 8,
    bottom: -128,
    marginVertical: 36,
    padding: 4,
    position: 'absolute',
    textAlign: 'center',
  },
  ctaText: {
    fontSize: 24,
    fontWeight: '800',
  },

  text: {
    fontWeight: '800',
    fontSize: 64,
  },
})

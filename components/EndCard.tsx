import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import type {CardDefinition} from '../types'

type Props = {
  onPressNewGame(): void
  rightCards: Set<CardDefinition>
  wrongCards: Set<CardDefinition>
}

export default function EndCard({
  onPressNewGame,
  rightCards,
  wrongCards,
}: Props) {
  return (
    <View onTouchEnd={onPressNewGame}>
      <View style={styles.root}>
        <Text style={styles.subtext}>You got:</Text>
        <Text style={styles.text}>
          {100 *
            Math.round(rightCards.size / (rightCards.size + wrongCards.size))}
          %
        </Text>
        <Text style={styles.subtext}>
          {rightCards.size} of {wrongCards.size}
        </Text>
        <View style={styles.cta}>
          <Text style={styles.ctaText}>Tap anywhere to restart</Text>
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
    backgroundColor: 'limegreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cta: {
    borderBottomColor: '#222',
    borderBottomWidth: 8,
    bottom: -128,
    marginHorizontal: -24,
    marginVertical: 36,
    paddingVertical: 4,
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
  subtext: {},
})

import {StatusBar} from 'expo-status-bar'
import React, {useState} from 'react'
import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native'
import CallOnTap from './CallOnTap'
import Card from './Card'
import EndCard from './EndCard'

const TEMPLATES = {
  StandardTemplate({a}: {a: string}): React.ReactElement {
    return <>a</>
  },
}

type Props = {
  cards: Card[]
}

type Card = {
  front: string
  back: string
}

export default function Game({cards}: Props) {
  const [index, setIndex] = useState(0)
  const [side, setSide] = useState<'front' | 'back'>('front')

  function onTap() {
    setIndex((_) => _ + 1)
  }

  function onTapCard(e: GestureResponderEvent) {
    e.stopPropagation()
    setSide((_) => (_ === 'front' ? 'back' : 'front'))
  }

  function onTapNewGame() {
    setIndex(0)
  }

  if (!cards[index]) {
    return <EndCard onPressNewGame={onTapNewGame} />
  }

  return (
    <View onTouchEnd={onTap} style={styles.root}>
      <Card onTouchEnd={onTapCard} text={cards[index][side]} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: 'stretch',
    justifyContent: 'center',
  },
})

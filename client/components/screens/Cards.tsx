import {StatusBar} from 'expo-status-bar'
import React, {useState} from 'react'
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import Card from '../Card'
import EndCard from '../EndCard'
import type {CardDefinition} from '../../types'
import Menu from '../Menu'
import {RootStackParamList} from '../../Navigator'
import {NativeStackScreenProps} from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<RootStackParamList, 'Cards'>

const CARDS = [
  {
    front: 'わたし',
    back: 'I',
  },
  {
    front: 'ぼく',
    back: 'I (male)',
  },
]

export default function Cards({}: Props): React.ReactElement {
  const [index, setIndex] = useState(0)
  const [side, setSide] = useState<'front' | 'back'>('front')
  const [rightCards, setRightCards] = useState<Set<CardDefinition>>(new Set())
  const [wrongCards, setWrongCards] = useState<Set<CardDefinition>>(new Set())

  const currentCard = CARDS[index]

  function next() {
    setIndex((_) => _ + 1)
    setSide('front')
  }

  function onTap() {
    console.log('tap')
    next()
  }

  function onTapCard(e: GestureResponderEvent) {
    console.log('tap card')
    e.stopPropagation()
    setSide((_) => (_ === 'back' ? 'front' : 'back'))
  }

  function onSwipeCardLeft() {
    console.log('left')
    setWrongCards(wrongCards.add(currentCard))
    next()
  }

  function onSwipeCardRight() {
    console.log('right')
    setRightCards(rightCards.add(currentCard))
    next()
  }

  function onTapNewGame() {
    setIndex(0)
    setSide('front')
  }

  function onPressEditCard() {}

  if (!currentCard) {
    return (
      <EndCard
        onPressNewGame={onTapNewGame}
        rightCards={rightCards}
        wrongCards={wrongCards}
      />
    )
  }

  return (
    <View style={styles.root}>
      <TouchableWithoutFeedback onPress={onTap}>
        <Card
          onPress={onTapCard}
          onSwipeLeft={onSwipeCardLeft}
          onSwipeRight={onSwipeCardRight}
          text={currentCard[side]}
        />
      </TouchableWithoutFeedback>
      <Menu onPressNewGame={onTapNewGame} onPressEditCard={() => {}} />
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

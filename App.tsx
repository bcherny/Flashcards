import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import CallOnTap from './components/CallOnTap'
import Card from './components/Card'
import Game from './components/Game'

const TEMPLATES = {
  StandardTemplate({a}: {a: string}): React.ReactElement {
    return <>a</>
  },
}

const CARDS = [
  {
    front: 'わたし',
    back: 'I',
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <Game cards={CARDS} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%',
  },
})

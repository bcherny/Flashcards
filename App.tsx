import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import Lobby from './components/screens/Lobby'
import {NavigationContainer} from '@react-navigation/native'
import Game from './components/screens/Game'
import {Stack} from './Navigator'
import Decks from './components/screens/Decks'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.root}>
        <Stack.Navigator>
          <Stack.Screen
            name="Decks"
            component={Decks}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="Lobby"
            component={Lobby}
            options={({route}) => ({title: route.params.name})}
          />
          <Stack.Screen
            name="Game"
            component={Game}
            options={({route}) => ({title: route.params.name})}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f9f9f9',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    width: '100%',
  },
})

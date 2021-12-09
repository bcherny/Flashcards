import React from 'react'
import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import Lobby from './components/Lobby'
import {NavigationContainer} from '@react-navigation/native'
import Game from './components/Game'
import {Stack} from './Navigator'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.root}>
        <Stack.Navigator>
          <Stack.Screen
            name="Lobby"
            component={Lobby}
            options={{title: 'Home'}}
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

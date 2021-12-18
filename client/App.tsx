import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import Decks from './components/screens/Decks'
import {NavigationContainer} from '@react-navigation/native'
import Cards from './components/screens/Cards'
import {Stack} from './Navigator'
import Collections from './components/screens/Collections'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.root}>
        <Stack.Navigator>
          <Stack.Screen
            name="Collections"
            component={Collections}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="Decks"
            component={Decks}
            options={({route}) => ({title: route.params.name})}
          />
          <Stack.Screen
            name="Cards"
            component={Cards}
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

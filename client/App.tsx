import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import Decks from './components/screens/Decks'
import {NavigationContainer} from '@react-navigation/native'
import Cards from './components/screens/Cards'
import {Stack} from './Navigator'
import Folders from './components/screens/Folders'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.root}>
        <Stack.Navigator>
          <Stack.Screen
            name="Folders"
            component={Folders}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="Decks"
            component={Decks}
            options={({route}) => ({title: route.params.title})}
          />
          <Stack.Screen
            name="Cards"
            component={Cards}
            options={({route}) => ({title: route.params.title})}
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

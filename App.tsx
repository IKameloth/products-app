import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyStackNavigator from './src/navigator/MyStackNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <MyStackNavigator />
    </NavigationContainer>
  )
}

export default App

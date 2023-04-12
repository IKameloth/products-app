import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyStackNavigator from './src/navigator/MyStackNavigator'
import { AuthProvider } from './src/context/AuthContext'

const AppState = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <AuthProvider>{children}</AuthProvider>
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MyStackNavigator />
      </AppState>
    </NavigationContainer>
  )
}

export default App

import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen } from '../screens/LoginScreen'
import { RegisterScreen } from '../screens/RegisterScreen'
import { ProtectedScreen } from '../screens/ProtectedScreen'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { LoadingScreen } from '../screens/LoadingScreen'
import { ProductsNavigator } from './ProductsNavigator'

const Stack = createStackNavigator()

const MyStackNavigator = () => {
  const { status } = useContext(AuthContext)

  if (status === 'checking') return <LoadingScreen />

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      {status === 'authenticated' ? (
        <>
          <Stack.Screen name="ProductsScreen" component={ProductsNavigator} />
          <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default MyStackNavigator

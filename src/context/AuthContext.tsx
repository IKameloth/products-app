import { createContext, useEffect, useReducer } from 'react'
import { LoginData, LoginResponse, RegisterData, RegisterResponse, Usuario } from '../interfaces'
import { AuthState, authReducer } from './authReducer'
import cafeApi from '../api/cafeApi'
import AsyncStorage from '@react-native-async-storage/async-storage'

type AuthContextProps = {
  errorMessage: string
  token: string | null
  user: Usuario | null
  status: 'checking' | 'authenticated' | 'not-authenticated'
  signUp: (registerData: RegisterData) => void
  signIn: (loginData: LoginData) => void
  logOut: () => void
  removeError: () => void
}

const authInitState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitState)

  useEffect(() => {
    checkToken()
  }, [])

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token')
    if (!token) return dispatch({ type: 'notAuthenticated' })

    const response = await cafeApi.get('/auth')
    if (response.status !== 200) {
      return dispatch({ type: 'notAuthenticated' })
    }

    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signIn', payload: { token: response.data.token, user: response.data.usuario } })
  }

  const signUp = async ({ correo, nombre, password }: RegisterData) => {
    try {
      const response = await cafeApi.post<RegisterResponse>('/usuarios', { correo, nombre, password })
      dispatch({ type: 'signUp', payload: { token: response.data.token, user: response.data.usuario } })
      await AsyncStorage.setItem('token', response.data.token)
    } catch (error: any) {
      dispatch({ type: 'addError', payload: error.response.data.errors[0].msg || 'Bad info' })
    }
  }

  const signIn = async ({ correo, password }: LoginData) => {
    try {
      const resp = await cafeApi.post<LoginResponse>('/auth/login', { correo, password })
      dispatch({ type: 'signIn', payload: { token: resp.data.token, user: resp.data.usuario } })
      await AsyncStorage.setItem('token', resp.data.token)
    } catch (error: any) {
      dispatch({ type: 'addError', payload: error.response.data.msg || 'Bad info' })
    }
  }

  const logOut = async () => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'logout' })
  }

  const removeError = () => {
    dispatch({ type: 'removeError' })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

import { createContext, useReducer } from 'react'
import { LoginData, LoginResponse, Usuario } from '../interfaces'
import { AuthState, authReducer } from './authReducer'
import cafeApi from '../api/cafeApi'

type AuthContextProps = {
  errorMessage: string
  token: string | null
  user: Usuario | null
  status: 'cheking' | 'authenticated' | 'not-authenticated'
  signUp: () => void
  signIn: (loginData: LoginData) => void
  logOut: () => void
  removeError: () => void
}

const authInitState: AuthState = {
  status: 'cheking',
  token: null,
  user: null,
  errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitState)
  const signUp = () => {}

  const signIn = async ({ correo, password }: LoginData) => {
    try {
      const resp = await cafeApi.post<LoginResponse>('/auth/login', { correo, password })
      dispatch({ type: 'signUp', payload: { token: resp.data.token, user: resp.data.usuario } })
    } catch (error: any) {
      dispatch({ type: 'addError', payload: error.response.data.msg || 'Bad info' })
    }
  }

  const logOut = () => {}
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

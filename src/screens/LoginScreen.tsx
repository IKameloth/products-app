import React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View
} from 'react-native'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'
import { useForm } from '../hooks/useForm'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props) => {
  const { email, password, onChange } = useForm({
    email: '',
    password: ''
  })

  const onLogin = () => {
    console.log({ email, password })
    Keyboard.dismiss()
  }

  return (
    <>
      <Background />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.title}>Login</Text>
          <Text style={loginStyles.label}>Email:</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
            underlineColorAndroid="#FFF"
            style={[loginStyles.inputField, Platform.OS === 'ios' && loginStyles.inputFieldIos]}
            selectionColor="#FFF"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(value) => onChange(value, 'email')}
            onSubmitEditing={onLogin}
            value={email}
          />
          <Text style={loginStyles.label}>Password:</Text>
          <TextInput
            secureTextEntry
            placeholder="Enter your password"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="#FFF"
            style={[loginStyles.inputField, Platform.OS === 'ios' && loginStyles.inputFieldIos]}
            selectionColor="#FFF"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(value) => onChange(value, 'password')}
            onSubmitEditing={onLogin}
            value={password}
          />
          <View style={loginStyles.btnContainer}>
            <TouchableOpacity activeOpacity={0.8} style={loginStyles.button} onPress={onLogin}>
              <Text style={loginStyles.btnText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.replace('RegisterScreen')}>
              <Text style={loginStyles.btnText}>New account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

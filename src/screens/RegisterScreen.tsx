import React from 'react'
import { View, Text, KeyboardAvoidingView, Keyboard, Platform, TextInput, TouchableOpacity } from 'react-native'
import { WhiteLogo } from '../components/WhiteLogo'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/loginTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { Background } from '../components/Background'

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({ navigation }: Props) => {
  const { name, email, password, onChange } = useForm({
    name: '',
    email: '',
    password: ''
  })

  const onRegister = () => {
    console.log({ name, email, password })
    Keyboard.dismiss()
  }

  return (
    <>
      <Background />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.title}>Register</Text>
          <Text style={loginStyles.label}>Name:</Text>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="default"
            underlineColorAndroid="#FFF"
            style={[loginStyles.inputField, Platform.OS === 'ios' && loginStyles.inputFieldIos]}
            selectionColor="#FFF"
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={(value) => onChange(value, 'name')}
            onSubmitEditing={onRegister}
            value={name}
          />
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
            onSubmitEditing={onRegister}
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
            onSubmitEditing={onRegister}
            value={password}
          />
          <View style={loginStyles.btnContainer}>
            <TouchableOpacity activeOpacity={0.8} style={loginStyles.button} onPress={onRegister}>
              <Text style={loginStyles.btnText}>Register</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.replace('LoginScreen')}
            style={loginStyles.btnReturn}
          >
            <Text style={loginStyles.btnText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

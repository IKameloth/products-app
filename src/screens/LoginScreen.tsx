import React from 'react'
import { Platform, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'

export const LoginScreen = () => {
  return (
    <>
      <Background />
      <View style={loginStyles.formContainer}>
        <WhiteLogo />
        <Text style={loginStyles.title}>Login</Text>
        <Text style={loginStyles.label}>Email:</Text>
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="rgba(255,255,255,0,4)"
          keyboardType="email-address"
          underlineColorAndroid="#FFF"
          style={[loginStyles.inputField, Platform.OS === 'ios' && loginStyles.inputFieldIos]}
          selectionColor="#FFF"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={loginStyles.label}>Password:</Text>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="rgba(255,255,255,0,4)"
          underlineColorAndroid="#FFF"
          style={[loginStyles.inputField, Platform.OS === 'ios' && loginStyles.inputFieldIos]}
          selectionColor="#FFF"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={loginStyles.btnContainer}>
          <TouchableOpacity activeOpacity={0.8} style={loginStyles.button}>
            <Text style={loginStyles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={loginStyles.newUserContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => console.log()}>
            <Text style={loginStyles.btnText}>New account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

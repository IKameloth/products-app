import React from 'react'
import { Image, View } from 'react-native'

export const WhiteLogo = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={require('../assets/body-front-walk.gif')} style={{ width: 100, height: 110 }} />
    </View>
  )
}

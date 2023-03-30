import React from 'react'
import { Dimensions, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export const Background = () => {
  const windowHeight = Dimensions.get('window').height
  const windowWidth = Dimensions.get('window').width

  return (
    <View
      style={{
        position: 'absolute',
        width: windowWidth,
        height: windowHeight
      }}
    >
      <LinearGradient
        colors={['#5856D6', '#FFF']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 2 }}
      ></LinearGradient>
    </View>
  )
}

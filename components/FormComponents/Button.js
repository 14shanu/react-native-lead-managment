import { Button } from '@rneui/themed'
import React from 'react'
import { Controller } from 'react-hook-form'
import { View } from 'react-native'

export default function CustomsButton({control,name,onPressButton ,title,buttonProps},containerStyle) {
  return (
    <View key={title+name} >
        <Button {...buttonProps}  onPress= {onPressButton} title={title} 
        />
        
        </View>
        
  )
}

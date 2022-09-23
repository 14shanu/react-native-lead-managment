import { Button } from '@rneui/themed'
import React from 'react'
import { Controller } from 'react-hook-form'
import { View } from 'react-native'

export default function CustomsButton({control,name,onPressButton ,title}) {
  return (
    <View key={title+name}>

    <Controller 
    control={control}
    render={({field:{onChange,onBlur,value}})=>(
        <Button onBlur={onBlur} onPress= {onPressButton} title={title} 
        />
        
        )}
        name ={name}
        />
        </View>
        
  )
}

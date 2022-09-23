import React from 'react'
import { View,Text } from 'react-native'
import { Input } from "@rneui/themed";
import { Controller } from 'react-hook-form'

export default function CustomInput({control,validationProps,errors,name ,title,type}) {
  return (
    <View key={title+name}>
    
    <Controller 
        control={control}
        rules={validationProps}
        render={({field:{onChange,onBlur,value}})=>(
            <Input 
             onBlur={onBlur} onChangeText={value => onChange(value)} value={value} keyboardType={type} placeholder={title} 
            
            />
        
 )}
        name ={name}
        />
        {errors[name] && <Text>{errors[name].message}</Text>}
       
        
        </View>
  )
}

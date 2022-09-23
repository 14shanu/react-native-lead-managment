import { Button } from '@rneui/base'
import React from 'react'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { View } from 'react-native'
import DatePicker from 'react-native-date-picker'

export default function CustomDatepicker({control,validationProps,errors,name,title,datepickerProps}) {
    const [open,setOpen] = useState(false)
  return (
    <View key={title+name}>
    
        <Button title={title} onPress={() => setOpen(true)} />
    <Controller 
        control={control}
        rules={validationProps}
        render={({field:{onChange,onBlur,value}})=>(
            <DatePicker {...datepickerProps}  date={value} open={open}   onBlur={onBlur} onDateChange={value => onChange(value)} onCancel={() => {
                setOpen(false)
              }}
              onConfirm={() => {
                onChange(value)
                setOpen(false)
              }}
            />
        
 )}
        name ={name}
        />
        {errors[name] && <Text>{errors[name].message}</Text>}
       
        
        </View>
  )
}

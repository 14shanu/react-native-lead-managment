import React from 'react'
import { CheckBox,Icon } from "@rneui/themed";
import { View,Text } from 'react-native'
import { Controller } from 'react-hook-form'

export default function Checkbox({control,validationProps,errors,name ,title}) {
  return (
    <View key={title+name}>
    
            <Controller 
                control={control}
                rules={validationProps}
                render={({field:{onChange,onBlur,value}})=>(
                    <CheckBox  onPress={() => onChange(!value)} checked={value}  title={title}  
                    checkedIcon={
                        <Icon
                          name="radio-button-checked"
                          type="material"
                          color="green"
                          size={25}
                          iconStyle={{ marginRight: 10 }}
                        />
                      }
                      uncheckedIcon={
                        <Icon
                          name="radio-button-unchecked"
                          type="material"
                          color="grey"
                          size={25}
                          iconStyle={{ marginRight: 10 }}
                        />
                      }
                    />
                
         )}
                name ={name}
                />
                {errors[name] && <Text>{errors[name].message}</Text>}
               
                
                </View>
  )
}

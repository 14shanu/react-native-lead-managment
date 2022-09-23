import React from 'react'
import { View,Text } from 'react-native'
import { Controller } from 'react-hook-form'
import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet } from 'react-native';

export default function CustomDropdown({control,validationProps,errors,name ,title,DropdownProps}) {

    return (

    <View key={title+name}>
    
    <Controller 
        control={control}
        rules={validationProps}
        render={({field:{onChange,onBlur,value}})=>(
            <Dropdown {...DropdownProps}  onBlur={onBlur} onChange={value => onChange(value)} value={value}  placeholder={title} 
            statusBarIsTranslucent={true}
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      searchPlaceholder="Search..."
      maxHeight={300}
            />
        
 )}
        name ={name}
        />
        {errors[name] && <Text>{errors[name].message}</Text>}
       
        
        </View>

  )
}
const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
  
      elevation: 2,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
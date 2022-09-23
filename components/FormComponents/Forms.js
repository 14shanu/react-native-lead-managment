import React from 'react'
import {   useForm } from 'react-hook-form'
import { View,Text } from 'react-native'
import Checkbox from './checkbox';
import CustomInput from './CustomInput';
import CustomsButton from './Button';
import CustomDropdown from './Dropdown';
import CustomDatepicker from './Datepicker';
import CustomMultiSelect from './MultiSelect';
import { Button } from '@rneui/themed';
// import { Icon } from '@rneui/themed';
export default function Forms({template,defaultValues,onSubmit , validate}) {
    const {control,handleSubmit,formState:{errors}, watch,getValues , setError,clearErrors } =useForm(
        {defaultValues}
    )

    const {title,Fields}=template
  
    let watchValues = watch()

    validate(watchValues ,{errors,setError,clearErrors })

    // console.log(template);
    const renderFields =(Fields)=>{

          return Fields.map((field)=>{
            
                  let {title, type , name , validationProps , dynamic,onPressButton,DropdownProps,datepickerProps}=field

                  console.log('value....',dynamic && watchValues[ dynamic['field']][dynamic['valueField']]);
                  
                  let showField =dynamic ? (dynamic['type']=='dropdown'? watchValues[ dynamic['field']][dynamic['valueField']]==dynamic['value'] : watchValues[dynamic['field']]==dynamic['value']) : true

    if(!showField) return

            switch(type){
    case 'text':
        return( 
          <View key={title}>
          <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='default'  />
         </View>
                )
    case 'numeric':
        return( 
           <View key={title}>
            <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='numeric'  />
           </View>
                ) 
    case 'url':
        return( 
          <View key={title}>
          <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='url'  />
         </View>
                ) 
    case 'checkbox':
        return( 
    <View key={title}>
           <Checkbox  control={control} validationProps={validationProps} errors={errors} name={name} title={title} />
           </View>
                )
    case 'button': 
          return(
            <View key={title}>
            <CustomsButton control={control} name={name} onPressButton={onPressButton} title={title} />
            </View>
          )
    case 'dropdown':
      return(
        <View key={title}>
        <CustomDropdown control={control} validationProps={validationProps} errors={errors} name={name} title={title} DropdownProps={DropdownProps}  />
        </View>
      )
    case 'datepicker':
      return(
        <View key={title}>
          <CustomDatepicker control={control} validationProps={validationProps} errors={errors} name={name} title={title} datepickerProps={datepickerProps}  />
        </View>
      )
    case 'multiselect':
      return(
        <View key={title}>
          <CustomMultiSelect control={control} validationProps={validationProps} errors={errors} name={name} title={title} DropdownProps={DropdownProps} />
        </View>
      )
    
    default:
    return    <Text>Invalid Field Type</Text>
}
      
        })
    }

   
 return(
 
    <View>
   <Text>{title}</Text>
        {renderFields(Fields)}
        {/* <Icon
        name='rowing' />

      <Icon
        name='g-translate'
        color='#00aced' />

      <Icon
        name='sc-telegram'
        type='evilicon'
        color='#517fa4'
      /> */}
       
        <Button title='Submit' onPress={handleSubmit(onSubmit)}/>
      
    </View>
 )
}

import React from 'react'
import {   useForm } from 'react-hook-form'
import { View,Text } from 'react-native'
import Checkbox from './Checkbox';
import CustomInput from './CustomInput';
import CustomsButton from './Button';
import CustomDropdown from './Dropdown';
import CustomDatepicker from './Datepicker';
import CustomMultiSelect from './MultiSelect';
import { Button } from '@rneui/themed';
import CustomHeader from '../utils/CustomHeader';
// import { Icon } from '@rneui/themed';
export default function Forms({template,defaultValues,onSubmit , validate}) {
    const {control,handleSubmit,formState:{errors}, watch,getValues , setError,clearErrors } =useForm(
        {defaultValues}
    )

    const {title,Fields,mainContainerStyle,submitButtonStyle}=template
  
    let watchValues = watch()

    validate(watchValues ,{errors,setError,clearErrors })

    // console.log(template);
    const renderFields =(Fields)=>{

          return Fields.map((field)=>{
            
                  let {title, type , name , validationProps , dynamic,onPressButton,fieldProps,containerStyle}=field

                  console.log('value....',dynamic && watchValues[ dynamic['field']][dynamic['valueField']]);
                  
                  let showField =dynamic ? (dynamic['type']=='dropdown'? watchValues[ dynamic['field']][dynamic['valueField']]==dynamic['value'] : watchValues[dynamic['field']]==dynamic['value']) : true

    if(!showField) return

            switch(type){
    case 'text':
        return( 
          <View key={title} style={containerStyle?containerStyle:''}>
          <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='default' inputProps={fieldProps}  />
         </View>
                )
    case 'numeric':
        return( 
           <View key={title} style={containerStyle?containerStyle:''}>
            <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='numeric' inputProps={fieldProps}  />
           </View>
                ) 
    case 'url':
        return( 
          <View key={title} style={containerStyle?containerStyle:''}>
          <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='url' inputProps={fieldProps}  />
         </View>
                )
    case 'email':
        return( 
          <View key={title} style={containerStyle?containerStyle:''}>
          <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='email-address' inputProps={fieldProps}  />
         </View>
                )
       case 'phone-pad':
        return( 
          <View key={title} style={containerStyle?containerStyle:''}>
          <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='phone-pad' inputProps={fieldProps}  />
         </View>
                ) 
        case 'number-pad':
        return( 
          <View key={title} style={containerStyle?containerStyle:''}>
          <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='number-pad' inputProps={fieldProps}  />
         </View>
                ) 
       case 'ascii-capable':
        return( 
          <View key={title} style={containerStyle?containerStyle:''}>
          <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='ascii-capable' inputProps={fieldProps}  />
         </View>
                ) 
    case 'numbers-and-punctuation':
        return( 
          <View key={title} style={containerStyle?containerStyle:''}>
          <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='numbers-and-punctuation' inputProps={fieldProps}  />
         </View>
                )
       case 'name-phone-pad':
        return( 
          <View key={title} style={containerStyle?containerStyle:''}>
          <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='name-phone-pad' inputProps={fieldProps}  />
         </View>
                ) 
       case 'decimal-pad':
        return( 
          <View key={title} style={containerStyle?containerStyle:''}>
          <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='decimal-pad' inputProps={fieldProps}  />
         </View>
                ) 
                case 'twitter':
        return( 
          <View key={title} style={containerStyle?containerStyle:''}>
          <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='twitter' inputProps={fieldProps}  />
         </View>
                ) 
                      case 'web-search':
        return( 
          <View key={title} style={containerStyle?containerStyle:''}>
          <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='web-search' inputProps={fieldProps}  />
         </View>
                ) 
                   case 'ascii-capable-number-pad':
        return( 
          <View key={title} style={containerStyle?containerStyle:''}>
          <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='ascii-capable-number-pad' inputProps={fieldProps}  />
         </View>
                ) 
                    case 'visible-password':
        return( 
          <View key={title} style={containerStyle?containerStyle:''}>
          <CustomInput control={control} validationProps={validationProps} errors={errors} name={name} title={title} type='visible-password' inputProps={fieldProps}  />
         </View>
                ) 
                
    case 'checkbox':
        return( 
    <View key={title} style={containerStyle?containerStyle:''}>
           <Checkbox  control={control} validationProps={validationProps} errors={errors} name={name} title={title} checkboxProps={fieldProps} />
           </View>
                )
    case 'button': 
          return(
            <View key={title} style={containerStyle?containerStyle:''}>
            <CustomsButton control={control} name={name} onPressButton={onPressButton} title={title} buttonProps={fieldProps} containerStyle={containerStyle} />
            </View>
          )
    case 'dropdown':
      return(
        <View key={title} style={containerStyle?containerStyle:''}>
        <CustomDropdown control={control} validationProps={validationProps} errors={errors} name={name} title={title} DropdownProps={fieldProps}  />
        </View>
      )
    case 'datepicker':
      return(
        <View key={title} style={containerStyle?containerStyle:''}>
          <CustomDatepicker control={control} validationProps={validationProps} errors={errors} name={name} title={title} datepickerProps={fieldProps}  />
        </View>
      )
    case 'multiselect':
      return(
        <View key={title} style={containerStyle?containerStyle:''}>
          <CustomMultiSelect control={control} validationProps={validationProps} errors={errors} name={name} title={title} DropdownProps={DropdownProps} />
        </View>
      )
    
    default:
    return    <Text>Invalid Field Type</Text>
}
      
        })
    }

   
 return(
 
    <View style={mainContainerStyle?mainContainerStyle:''}>
   <CustomHeader title={title}/>
        {renderFields(Fields)}
       
       <View style={submitButtonStyle?submitButtonStyle:''}>

        <Button title='Submit' onPress={handleSubmit(onSubmit)}/>
       </View>
      
    </View>
 )
}

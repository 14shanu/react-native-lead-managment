import React  from 'react'
import { View } from 'react-native'
import Forms from './FormComponents/Forms';

export default function LeadForm({navigation}) {

  const defaultValues={
    firstName:'',
    lastName:'',
    includePortfolio:false,
    portfolioLink:'',
    country:"",
    start_date: new Date(),
    hobbies:[],

}

const Upload = ()=>{
  console.log('Upload...........');
}
const countries = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];


  const template = {
    title:'Leads',
    Fields:[
      {
      title:'First Name',
      type:'text',
      name:'firstName',
      validationProps:{
        required:'First Name is Mandatory'
      }
    },
    {
      title:'Last Name',
      type:'text',
      name:'lastName',
     
    }, 
    {
      title:'Include Portfolio',
      type:'checkbox',
      name:'includePortfolio',
     
    }, {
      title:'Country',
      type:'dropdown',
      name:'country',
      fieldProps:{
        data:countries,
        labelField:"label",
        valueField:"value",
        search:'search',
      }
     
    }
    , {
      title:'Portfolio Link',
      type:'url',
      name:'portfolioLink',
      dynamic:{
        field :'includePortfolio',
        type:'',
        valueField:'value',
        value: true
      }
     
    }
    , {
      title:'Upload',
      name:'button1',
      type:'button',
      onPressButton:Upload
     
    },
    {
      title:'Start Date',
      type:'datepicker',
      name:'start_date',
      fieldProps:{
        modal:true,
        mode:'date'

      }
     
    }, {
      title:'Hobbies',
      type:'multiselect',
      name:'hobbies',
      fieldProps:{
        data:countries,
        labelField:"label",
        valueField:"value",
        search:true
      }
     
    }
    
  
  ]
  }

  const validate =(watchValues , errroMethods)=>{
    let {errors , setError,clearErrors} = errroMethods
    
    if(watchValues['firstName']=='Admin'){
      if(!errors['firstName']){
        setError('firstName',{
          type:'manual',
          message:'you cannot use this as firstname'
        })
      }
     
    }else{
      if(errors['firstName'] && errors['firstName']['type'] ==='manual'){
        clearErrors('firstName')
      }
    }
    console.log('watchValues',watchValues);
  }

  const onSubmit = data => console.log('data......',data);

  return(
 
    <View>
   
        <Forms template={template} defaultValues={defaultValues} onSubmit={onSubmit}  validate={validate} />
          </View>
 )
}

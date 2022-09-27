import {  StyleSheet} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { net } from "react-native-force";
import Forms from "../../../components/FormComponents/Forms";

const win = Dimensions.get("window");
const AddLead = ({ navigation }) => {


  const defaultValues = {
    FirstName: "",
    LastName:"",
    Email: "",
    MobilePhone: "",
    IsConverted: false,
    City:"",
    Company:"",
    Country:"",
  }

  const uploadButton =()=>{
    
    console.log('Uploaded.......');
  }
const addLeadTemplate ={
  title:'Lead Info.',
  mainContainerStyle:styles.formContainer,
  submitButtonStyle:styles.SubmitBtn,
  Fields:[
    {
      title:'First Name',
      type:'text',
      name:'FirstName',
      fieldProps:{
        autoCapitalize:'none',
        autoCorrect:false,
        style:styles.inputStyle
      }
    },
    {
      title:'Last Name',
      type:'text',
      name:'LastName',
      fieldProps:{
        autoCapitalize:'none',
        autoCorrect:false,
        style:styles.inputStyle
      }
    },
    {
      title:'Email',
      type:'email',
      name:'Email',
      fieldProps:{
        autoCapitalize:'none',
        autoCorrect:false,
        style:styles.inputStyle
      }
    },{
      title:'Mobile No.',
      type:'numeric',
      name:'MobilePhone',
      fieldProps:{
        autoCapitalize:'none',
        autoCorrect:false,
        style:styles.inputStyle
      }
    },{
      title:'City',
      type:'text',
      name:'City',
      fieldProps:{
        autoCapitalize:'none',
        autoCorrect:false,
        style:styles.inputStyle
      }
    },{
      title:'Company',
      type:'text',
      name:'Company',
      fieldProps:{
        autoCapitalize:'none',
        autoCorrect:false,
        style:styles.inputStyle
      }
    },{
      title:'Country',
      type:'text',
      name:'Country',
      fieldProps:{
        autoCapitalize:'none',
        autoCorrect:false,
        style:styles.inputStyle
      }
    },{
      title:'Upload',
      type:'button',
      name:'upload',
      onPressButton:uploadButton,
      containerStyle:styles.UploadBtn,
      fieldProps:{
        buttonStyle:{
          backgroundColor: 'green',
          borderRadius: 20,
        },
        icon:{
          name: 'camera',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }
      }
    },
  ]

}
const validate =(watchValues , errroMethods)=>{
  
  console.log('watchValues',watchValues);
}
// -----------------------------onSubmit--------------------------------
  const onSubmit = async (data) => {
    console.log(data);
    net.sendRequest('/services/data', '/v54.0/sobjects/Lead/' , 
    (response) => {
      console.log(response)
      // Toast.show({
      //         type: 'success',
      //         text1: 'Success Information',
      //         text2: 'Lead has been added successfully'
      //       })
    
    },
    (error) => {
        console.log('Failed to Add Lead Data:' + error);
    }, 
    'POST', 
    { ...data}, 
    // {'X-Connect-Bearer-Urls': 'true'},
    // {fileUpload: {fileUrl:localPhotoUrl, fileMimeType:'image/jpeg', fileName:'pic.jpg'}}
);
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
<Forms template={addLeadTemplate} defaultValues={defaultValues} onSubmit={onSubmit} validate={validate} />

      </SafeAreaView>
    </ScrollView>
  );
};

export default AddLead;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin:20
  },
  formContainer: {
    marginHorizontal: 8,
    marginTop: 4,
  },
  UploadBtn: {
    marginVertical: 10,
    width: 100,
  },
  SubmitBtn: {
    marginVertical: 10,
  },
});

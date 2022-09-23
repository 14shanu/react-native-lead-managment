import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../../components/utils/Header'
import CustomHeader from '../../components/utils/CustomHeader'
import { SafeAreaView } from 'react-native'
import { Button } from '@rneui/base';
import { Dimensions } from "react-native";
const win = Dimensions.get('window');


const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        {/* <Header title="Lead Management System"/> */}
        <CustomHeader title="Home"/>

        <Image source={require('../../assets/salesforce_lead_management-01_1.png')}  style={styles.heroBaner}  resizeMode="stretch" />
     <View style={styles.actionBtns}>

      {/* <Button title='Add Student' onPress={()=>navigation.navigate("AddStudent")}/> */}
      <Button title='Add Lead' onPress={()=>navigation.navigate("Add Lead")}/>

      <Button title='List Of Leads' onPress={()=>navigation.navigate("List Of Leads")}/>
    

     </View>
    
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
container:{
    flex:1,
    // margin:20
},

heroBaner:{
  width: 400,
  height: 350,
  resizeMode: "contain",
  alignSelf: "center",
  borderWidth: 1,
  borderRadius: 15,
  marginVertical: 10,
},
actionBtns:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:20,
    marginTop:5
}

})
import React from "react";
import { Avatar, Button, Icon, Text } from "@rneui/themed";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { Divider } from "@rneui/themed";
import CustomHeader from "../../../components/utils/CustomHeader";

const LeadOverview = ({ navigation, route }) => {
  const LeadData = route.params.LeadData;
  console.log(LeadData);
  const LeadNameIntials = `${LeadData.FirstName[0]}${LeadData.LastName[0]}` 
  return (
    <SafeAreaView Style={styles.container}>
      <ScrollView>
      <CustomHeader title="Lead Overview"/>

        <View style={{flexDirection: 'row', marginTop: 25,marginLeft:20}}>
          <View>
            <Avatar
              size={100}
              rounded
              title={LeadNameIntials} 
              containerStyle={{ backgroundColor: "#1d4ed8" }}
            />
          </View>
          <View style={{marginLeft: 45,marginTop:20}}>
            <Text style={styles.title} >
              {LeadData.Name}
            </Text>
            <Text style={styles.caption}>{LeadData.Title}</Text>
           
          </View>
          
        </View>

          <View style={styles.leadInfoSection}>
        <View style={styles.row}>
            <Icon  name="briefcase-outline" type='ionicon'></Icon>
            <Text style={{color:"#777777", marginLeft: 20}}>{LeadData.Title}</Text>
        </View>
        <View style={styles.row}>
        <Icon name="mail-outline" type='ionicon'></Icon>
        <Text style={{color:"#777777", marginLeft: 20}}>{LeadData.Email}</Text>
        </View>
        
        <View style={styles.row}>
        <Icon name="location-outline" type='ionicon'></Icon>
       {LeadData.City && <Text style={{color:"#777777", marginLeft: 20}}>{LeadData.City}, {LeadData.Country} </Text>}
         {!LeadData.City &&   <Text style={{color:"#777777",marginLeft:20}}>{LeadData.Country}</Text>}
        </View>
        
        </View>
       
<Divider/>

<View style={{marginTop:10,marginLeft:20}}>
            
            <Text style={{color:"#777777"}}>Status({LeadData.Status})</Text>
        </View>

      

       
      </ScrollView>
    </SafeAreaView>
  );
};
export default LeadOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leadInfoHeader: {
    marginTop: 16,
    paddingHorizontal: 29,
    alignItem: "center",
    justifyContent: "center",
  },
 
  leadInfoSection:{
marginLeft:20,
marginTop:20
  },
  nameSection: {},
  leadName: {
    fontWeight: "200",
    fontSize: 50,
  },
});

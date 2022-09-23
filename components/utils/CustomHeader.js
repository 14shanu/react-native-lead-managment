import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/base";
import { Icon } from "@rneui/themed";


const CustomHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
    <Icon style={{width:30,height:30,marginTop:5}} name='reorder-three-outline' type='ionicon' />
      </View>

      <View style={{flex:1.5}}>
      <Text style={styles.text}>{title}</Text>
      </View>

      <View style={{flex:1}}>
    <Icon style={{width:30,height:30,marginTop:5}} name='log-out-outline' type='ionicon' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    padding:5,
    // marginTop: 40,
    flexDirection:'row',
  },
  text: {
    color: "black",
    textAlign: "center",
    justifyContent:'center',
    fontSize:20,
    marginTop:5
  },
});

export default CustomHeader;

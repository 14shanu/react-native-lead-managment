import React from 'react';
import {View,StyleSheet} from 'react-native';
import { Text } from '@rneui/base';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  header: {
    height: 'auto',
    padding: 10,
    // marginTop: 40,
    backgroundColor: '#334155',
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
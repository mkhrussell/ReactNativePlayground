import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';

import NativeAPIModule from '../../api/NativeAPIModule';

export default class NativeConstants extends Component {

  static navigationOptions = {
    title: "Native Constants Demo",
    headerStyle: {
      justifyContent: 'center'
    },
    headerTitleStyle: {
      alignSelf: 'center',
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>FIRST_DAY_OF_WEEK: {NativeAPIModule.FIRST_DAY_OF_WEEK}</Text>
          <Text style={styles.text}>FIRST_MONTH_OF_YEAR: {NativeAPIModule.FIRST_MONTH_OF_YEAR}</Text>          
        </View>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  text: {
    alignSelf: 'center',
    fontSize: 16
  }
});

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';

import NativeAPIModule from '../../api/NativeAPIModule';

export default class SimpleCallback extends Component {

  static navigationOptions = {
    title: "Simple Callback Demo",
    headerStyle: {
      justifyContent: 'center'
    },
    headerTitleStyle: {
      alignSelf: 'center',
    }
  }
  
  state = {
    sum: 0
  }

  sumHandler = () => {
    // Native method with callback
    NativeAPIModule.addNumbers(20, 30, result => {
      this.setState({sum: result})
    });
  }

  resetHandler = () => {
    this.setState({sum: 0});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sumContainer}>
          <Text style={styles.text}>20 + 30 = {this.state.sum || '?'}</Text>
          <CustomButton style={{margin: 10}} title="Sum" onPress={this.sumHandler} />
          <CustomButton title="Reset" onPress={this.resetHandler} />
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
  sumContainer: {
    width: '100%',
  },
  text: {
    alignSelf: 'center',
    fontSize: 16
  }
});

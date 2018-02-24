import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

const customButton = (props) => (
    <TouchableHighlight 
      onPress={props.onPress}
      style={[styles.button, props.style]}>
      <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    marginLeft: 50,
    marginRight: 50,
    //borderRadius: 5,
    height: 40,
    backgroundColor: '#7567B1',
    justifyContent: 'center'
  },
  text: {
      color: 'white',
      alignSelf: 'center',
      fontSize: 16
  }
});

export default customButton;
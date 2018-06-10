import React, { Component } from 'react';
import { TextInput } from 'react-native';

const ContactSearchBox = (props) => {
  return (
    <TextInput onChangeText={(value) => props.searchHandler(value)} placeholder="Search..." />
  );
}

export default ContactSearchBox;

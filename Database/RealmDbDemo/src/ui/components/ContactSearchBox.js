import React, { Component } from 'react';
import { TextInput } from 'react-native';

class ContactSearchBox extends Component {
  render() {
    return (
      <TextInput onChangeText={(value) => this.props.searchHandler(value)} placeholder="Search..." />
    );
  }
}

export default ContactSearchBox;

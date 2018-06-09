import React from 'react';
import { View, Text } from 'react-native';

const ContactListItem = (props) => {
  return (
    <View>
      <Text>{props.data.name}</Text>
      <Text>{props.data.phone}</Text>
    </View>
  );
}

export default ContactListItem;

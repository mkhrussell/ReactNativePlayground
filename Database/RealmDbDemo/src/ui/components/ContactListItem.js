import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ContactListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPressItem}>
      <Text>{props.data.name}</Text>
      <Text>{props.data.phone}</Text>
    </TouchableOpacity>
  );
}

export default ContactListItem;

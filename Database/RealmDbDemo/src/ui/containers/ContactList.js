import React, { Component } from 'react';
import { FlatList } from 'react-native';

import ContactListItem from '../components/ContactListItem';

class ContactList extends Component {
  render() {
    return (
      <FlatList
        style={{ flex: 1, flexDirection: 'column', }}
        data={this.props.data}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => (<ContactListItem data={item} />)}
      />
    );
  }
}

export default ContactList;

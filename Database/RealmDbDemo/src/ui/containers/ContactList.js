import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ContactListItem from '../components/ContactListItem';

export default class ContactList extends Component {
  render() {
    return (
      <FlatList
        style={styles.flatList}
        data={this.props.data}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => (<ContactListItem data={item} onPressItem={() => this.props.onPressItem(item, index)} />)}
      />
    );
  }
}

const styles = StyleSheet.create({
  flatList: { flex: 1, flexDirection: 'column', }
});

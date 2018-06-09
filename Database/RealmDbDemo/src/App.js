import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Realm from 'realm';
import uuidv4 from 'uuid/v4'

import { realmConfig } from './db/realmConfig'

import ContactList from './ui/containers/ContactList';
import ContactAddButton from './ui/components/ContactAddButton';
import ContactSearchBox from './ui/components/ContactSearchBox';

export default class App extends Component {
  state = {
    realm: null,
    contacts: null,
    filteredContacts: null
  }

  componentWillMount() {
    Realm.open(realmConfig)
      .then(realm => {
        const contacts = realm.objects('Contacts');
        this.setState({ realm, contacts, filteredContacts: contacts });
      })
      .catch(error => console.log(error));
  }

  addContact = () => {
    const realm = this.state.realm;
    realm.write(() => {
      realm.create('Contacts', { id: uuidv4(), name: 'Kamrul', phone: '01612345678' });
      const contacts = realm.objects('Contacts');
      this.setState({ contacts, filteredContacts: contacts });
    });
  }

  searchHandler = (searchText) => {
    const filteredContacts = this.state.contacts.filtered(`name CONTAINS[c] '${searchText}'`);
    this.setState({ filteredContacts });
  }

  render() {
    return (
      <View style={styles.container}>
        <ContactSearchBox searchHandler={this.searchHandler} />
        <ContactList data={this.state.filteredContacts} />
        <ContactAddButton onPress={this.addContact} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 25
  }
});

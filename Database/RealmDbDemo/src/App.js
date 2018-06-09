import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Realm from 'realm';
import uuidv4 from 'uuid/v4'

import  { realmConfig } from './db/realmConfig'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  componentWillMount() {
    Realm.open(realmConfig)
      .then(realm => {        
        realm.write(() => {
          realm.create('Contacts', {id: uuidv4(), name: 'Rex', phone: '01612345678'});
        });
        this.setState({ realm });       
      })
      .catch(error => console.log(error));
  }
  
  render() {
    const info = this.state.realm
        ? 'Number of contacts in this Realm: ' + this.state.realm.objects('Contacts').length
        : 'Loading...';
    return (
      <View style={styles.container}>
        <Text>{info}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

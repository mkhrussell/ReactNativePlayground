import React, { Component } from 'react';
import { 
  Platform, StyleSheet, View, Text, 
  FlatList, ActivityIndicator,
  TouchableOpacity, TouchableHighlight
} from 'react-native';

import { countries, extractKey } from '../data/countries';

class CountryListModal extends Component {

  state = {
    isLoading: false
  }

  loadCountryDetails = (id) => {
    // Dummy Progress
    setTimeout( () => {
      this.setState({isLoading: true});
      this.props.navigation.navigate("CountryDetails", {countryId: id});
    }, 1000);
  }

  dismissHandler = () => {
    this.props.navigation.goBack();
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity 
        onPress = {() => this.loadCountryDetails(item.id)}>
        <View style ={styles.renderItemView}>
            <Text style={styles.renderItemText}>{item.name}</Text>
        </View>
      </TouchableOpacity> 
    );
  };

  render() {
    let countryListView = (
      <FlatList
        style={styles.countryListView}
        data={countries}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );

    if(this.state.isLoading) {
      countryListView = (
        <ActivityIndicator />
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Select Country</Text>
        </View>
        <View style ={styles.mainContent}>
          <View style={styles.countryListViewContainer}>
            {countryListView}
          </View>
          <TouchableHighlight
            onPress={this.dismissHandler}
            style={styles.dismissButton}>
            <Text style={styles.dismissButtonText}>Dismiss</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flexDirection: "row",
    alignItems: 'center',
    height: Platform.OS == "ios" ? 64 : 56,
    marginTop: Platform.OS == "ios" ? 20 : 0
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    marginHorizontal: 16,
    alignSelf: 'center'
  },
  mainContent: {
    flex:1,
    width: '100%',
    backgroundColor:'white', 
  },
  dismissButton: {
    alignSelf: 'stretch',
    margin: 40,
    borderRadius: 5,
    height: 40,
    backgroundColor: '#7567B1',
    justifyContent: 'center'
  },
  dismissButtonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 16
  },
  countryListView: {
    width: '100%',
  },
  renderItemView: {
    width: '100%',
    height: 40
  },
  renderItemText: {
    fontSize:15,
    textAlign: 'center'
  },
  countryListViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
});

export default CountryListModal;

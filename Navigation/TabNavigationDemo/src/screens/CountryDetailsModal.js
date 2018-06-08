import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Platform } from 'react-native';

import { HeaderBackButton } from 'react-navigation';

import { countries } from '../data/countries';

class CountryDetailsModal extends Component {
    
  render() {
    const selectedCountryId = this.props.navigation.state.params.countryId;
    const selectedCountry = countries[selectedCountryId];
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Details the Country</Text>
        </View>
        <View style={styles.contentHeader}>
          <Text>Name: {selectedCountry.name}</Text>
          <Text>Capital: {selectedCountry.capital}</Text>
        </View>
        <View style={styles.description}>
          <ScrollView
            ref={(scrollView) => { this.scrollView = scrollView; }}
            contentContainerStyle={styles.contentContainer}
            style={styles.scrollView}
            horizontal={true}>
            <Text>{selectedCountry.description}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',  
    alignItems: 'center',
    backgroundColor: 'white',
  },
  contentHeader: {
    margin: 10,
    flex: 1,
    justifyContent: 'flex-start',  
    alignItems: 'center',
  },
  header: {
    flexDirection: "row",
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
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
  description: {
    margin: 20,
  },
  scrollView: {
    flex: 1,
    flexDirection: 'row'
  },
  contentContainer: {
    paddingVertical: 20,
  }
});

export default CountryDetailsModal;

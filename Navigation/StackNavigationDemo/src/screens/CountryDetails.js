import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { HeaderBackButton } from 'react-navigation';

import { countries } from '../data/countries';

class CountryDetails extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Country Details",
      headerStyle: {
        //backgroundColor: 'green',
      },
      headerTitleStyle: {
        //color: 'white',
        alignSelf: 'center',
      },
      headerBackTitle: 'Back',
      // Custom Back Button
      headerLeft: ( 
        <HeaderBackButton 
          onPress={() => { 
            navigation.state.params.customActionHandler();
            navigation.goBack(); }
          } 
          //tintColor={'white'}
        /> 
      ),
      headerRight: ( <View /> ), // This is an work-around solution for alignment issue
      headerBackTitleStyle: {
        //color: "white"
      },
      //headerTintColor:  'white'
    }; 
  }

  // Hack Solution
  // Perform somthing by Back button
  customActionHandler = () => {
    alert("Custom action in Back button");
  }

  componentDidMount() {
    // Hack Solution
    this.props.navigation.setParams({
      customActionHandler: this.customActionHandler
    });
  }
    
  render() {
    const selectedCountryId = this.props.navigation.state.params.countryId;
    const selectedCountry = countries[selectedCountryId];
    return (
      <View style={styles.container}>
          <View style={styles.contentHeader}>
            <Text>Name: {selectedCountry.name}</Text>
            <Text>Capital: {selectedCountry.capital}</Text>
          </View>
          <View style={styles.description}>
            <ScrollView 
              ref={(scrollView) => {this.scrollView = scrollView;}}
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

export default CountryDetails;

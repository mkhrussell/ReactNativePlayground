import React, { Component } from 'react';
import { 
  Platform, StyleSheet, View, Text, 
  FlatList, ActivityIndicator,
  TouchableOpacity, TouchableHighlight
} from 'react-native';

import { countries, extractKey } from '../data/countries';

class CountryList extends Component {
  static navigationOptions = {
    title: "Country List",
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTitleStyle: {
      //color: 'white',
      alignSelf: 'center',
    }
  }

  state = {
    isLoading: false
  }

  loadCountryDetails = (id) => {
    // Dummy Progress
    setTimeout( () => {
      this.setState({isLoading: true});
      this.props.navigation.navigate("CountryDetailsModal", {countryId: id});
      this.setState({isLoading: false});
    }, 1000);
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

export default CountryList;

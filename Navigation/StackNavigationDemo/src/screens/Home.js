import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      //backgroundColor: 'green',
      justifyContent: 'center'
    },
    headerTitleStyle: {
      //color: 'white',
      alignSelf: 'center',
    }
  }

  showCountryListHandler = () => {
    this.props.navigation.navigate('CountryListModal');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight 
          onPress={this.showCountryListHandler}
          style={styles.showCountryListButton}>
          <Text style={styles.showCountryListButtonText}>Show Country List</Text>
        </TouchableHighlight>
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
  showCountryListButton: {
    alignSelf: 'stretch',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 5,
    height: 40,
    backgroundColor: '#7567B1',
    justifyContent: 'center'
  },
  showCountryListButtonText: {
      color: 'white',
      alignSelf: 'center',
      fontSize: 16
  }
});

export default Home;

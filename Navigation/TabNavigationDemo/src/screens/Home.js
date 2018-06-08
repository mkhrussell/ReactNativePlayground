import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTitleStyle: {
      //color: 'white',
      alignSelf: 'center',
    }
  }

  render() {
    return (
      <View style={styles.container}>        
        <Text style={styles.content}>Home Tab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  content: {
      alignSelf: 'center',
      fontSize: 16
  }
});

export default Home;

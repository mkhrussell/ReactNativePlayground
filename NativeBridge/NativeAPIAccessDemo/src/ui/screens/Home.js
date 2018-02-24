import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import CustomButton from '../components/CustomButton';

class Home extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      justifyContent: 'center'
    },
    headerTitleStyle: {
      alignSelf: 'center',
    }
  }

  simpleCallbackDemoHandler = () => {
    this.props.navigation.navigate('SimpleCallback');
  }

  promiseBasedDemoHandler = () => {
    this.props.navigation.navigate('PromiseBased');
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomButton title="Simple Callback" onPress={this.simpleCallbackDemoHandler} />
        <CustomButton style={{marginTop: 10}} title="Promise Based" onPress={this.promiseBasedDemoHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;

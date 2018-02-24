import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// Screens
import Home from './src/screens/Home';
import CountryListModal from './src/screens/CountryListModal';
import CountryDetails from './src/screens/CountryDetails';

const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  CountryDetails: {
    screen: CountryDetails
  }
});

const App = StackNavigator({
    Root: {
      screen: RootStack
    },
    CountryListModal: {
      screen: CountryListModal
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default App;

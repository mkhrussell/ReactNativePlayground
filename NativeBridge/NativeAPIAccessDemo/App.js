import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// Screens
import Home from './src/ui/screens/Home';
import SimpleCallback from './src/ui/screens/SimpleCallback';

const App = StackNavigator({
  Home: {
    screen: Home
  },
  SimpleCallback: {
    screen: SimpleCallback
  }
});

export default App;

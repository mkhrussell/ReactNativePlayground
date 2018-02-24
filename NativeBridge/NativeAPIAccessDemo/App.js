import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// Screens
import Home from './src/ui/screens/Home';
import SimpleCallback from './src/ui/screens/SimpleCallback';
import PromiseBased from './src/ui/screens/PromiseBased';

const App = StackNavigator({
  Home: {
    screen: Home
  },
  SimpleCallback: {
    screen: SimpleCallback
  },
  PromiseBased: {
    screen: PromiseBased
  }
});

export default App;

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// Screens
import Home from './src/ui/screens/Home';
import SimpleCallback from './src/ui/screens/SimpleCallback';
import PromiseBased from './src/ui/screens/PromiseBased';
import EventEmitter from './src/ui/screens/EventEmitter';

const App = StackNavigator({
  Home: {
    screen: Home
  },
  SimpleCallback: {
    screen: SimpleCallback
  },
  PromiseBased: {
    screen: PromiseBased
  },
  EventEmitter: {
    screen: EventEmitter
  }
});

export default App;

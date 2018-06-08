import { createTabNavigator, createStackNavigator } from 'react-navigation';

// Screens
import Home from './src/screens/Home';
import CountryList from './src/screens/CountryList';
import CountryDetailsModal from './src/screens/CountryDetailsModal';

const RootStack = createTabNavigator({
  Home: {
    screen: Home
  },
  CountryList: {
    screen: CountryList
  }
});

const App = createStackNavigator({
    Root: {
      screen: RootStack
    },
    CountryDetailsModal: {
      screen: CountryDetailsModal
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default App;

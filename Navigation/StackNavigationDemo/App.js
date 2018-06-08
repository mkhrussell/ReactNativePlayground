import { createStackNavigator } from 'react-navigation';

// Screens
import Home from './src/screens/Home';
import CountryListModal from './src/screens/CountryListModal';
import CountryDetails from './src/screens/CountryDetails';

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  CountryDetails: {
    screen: CountryDetails
  }
});

const App = createStackNavigator({
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

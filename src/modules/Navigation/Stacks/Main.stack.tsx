import { createStackNavigator } from 'react-navigation';

import Routes from '../Navigation.constant';

import HomeStack from './Home.stack';

export default createStackNavigator(
  {
    [Routes.Main.Main]: HomeStack
  },
  {
    initialRouteName: Routes.Main.Main,
    navigationOptions: {
      header: null
    }
  }
);

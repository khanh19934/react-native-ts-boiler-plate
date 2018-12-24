import { createStackNavigator } from 'react-navigation';

import Routes from '../Navigation.constant';
import Screens from '../Navigation.screen';

const HomeStack = createStackNavigator(
  {
    [Routes.Home.Home]: Screens.Home
  },
  {
    initialRouteName: Routes.Home.Home
  }
);

export default HomeStack;

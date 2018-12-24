import { always } from 'ramda';
import { compose, setStatic } from 'recompose';

import HomeView from './Home.view';

const navigationOptions = always({
  header: null
});

const enhance = compose(setStatic('navigationOptions', navigationOptions));

export default enhance(HomeView);

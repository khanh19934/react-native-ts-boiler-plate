import { always, pick } from 'ramda';
import { compose, setStatic } from 'recompose';
import { connect } from '../../context/appStore';

import HomeView, { IProps } from './Home.view';

const navigationOptions = always({
  header: null
});

const enhance = compose<IProps, IProps>(
  setStatic('navigationOptions', navigationOptions),
  connect(pick(['loading']))
);

export default enhance(HomeView);

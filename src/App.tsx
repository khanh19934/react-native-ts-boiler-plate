import React from 'react';
import { createAppContainer } from 'react-navigation';
import { compose } from 'recompose';
import Navigator from './modules/Navigation';
import withContext from './hocs/withContext.hoc';

const AppContainer = createAppContainer(Navigator);
const App = () => <AppContainer />;

export default compose(withContext)(App);

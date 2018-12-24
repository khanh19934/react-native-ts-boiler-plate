import React from 'react';
import { ScrollView, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { compose } from 'recompose';
import Navigator from './modules/Navigation';

const AppContainer = createAppContainer(Navigator);
const App = () => <AppContainer />;

export default App;

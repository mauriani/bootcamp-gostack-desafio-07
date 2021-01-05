import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';
import store from './store/index';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Routes />
    </Provider>
  );
}

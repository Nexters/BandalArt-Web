import React from 'react';
import { initApiClient } from '../../agent/ApiClient';
import { BandalartSharePage } from './share';
import { Provider } from 'react-redux';
import { Store } from 'redux';

initApiClient();

export const App = ({ store }: { store: Store }) => {
  return (
    <Provider store={store}>
      <BandalartSharePage />
    </Provider>
  );
};

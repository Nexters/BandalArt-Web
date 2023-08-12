import React from 'react';
import { initApiClient } from '../../agent/ApiClient';
import { BandalartSharePage } from './pages/share';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { DefaultContainer } from './components/_common/DefaultContainer';

initApiClient();

type AppProps = {
  store: Store;
  assetPath: string;
  isMobile: boolean;
};

export const App = ({ store, assetPath, isMobile }: AppProps) => {
  return (
    <Provider store={store}>
      <DefaultContainer assetPath={assetPath} isMobile={isMobile}>
        <BandalartSharePage />
      </DefaultContainer>
    </Provider>
  );
};

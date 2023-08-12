import React from 'react';
import { initApiClient } from '../../agent/ApiClient';
import { BandalartSharePage } from './pages/share';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { DefaultContainer } from './components/_common/DefaultContainer';
import { AppProps } from './types/app';

initApiClient();

type Props = {
  store: Store;
} & AppProps;

export const App = ({ store, assetPath, isMobile }: Props) => {
  return (
    <Provider store={store}>
      <DefaultContainer assetPath={assetPath} isMobile={isMobile}>
        <BandalartSharePage />
      </DefaultContainer>
    </Provider>
  );
};

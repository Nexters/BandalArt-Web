import React from 'react';
import { initApiClient } from '../../agent/ApiClient';
import { BandalartSharePage } from './share';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { css, cx } from '@linaria/core';
import { theme } from './theme';

initApiClient();

export const App = ({ store }: { store: Store }) => {
  return (
    <Provider store={store}>
      <div className={cx(globalStyle, 'theme-light')}>
        <BandalartSharePage />
      </div>
    </Provider>
  );
};

const globalStyle = css`
  ${theme};

  :global(html) {
    html {
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
    }
  }
`;

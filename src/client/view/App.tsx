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
  font-family:
    'Pretendard Variable',
    Pretendard,
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    sans-serif;

  background-color: var(--color-50);

  ${theme};

  :global(html) {
    html {
      box-sizing: border-box;
    }

    body {
      margin: 0;
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

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      margin-block: 0;
      margin-inline: 0;
      padding-inline-start: 0;
    }
  }
`;

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Store } from 'redux';
import { App } from './view/App';

export const renderer = ({
  stylesheetUrl,
  store,
}: {
  stylesheetUrl: string;
  store: Store;
}) => {
  const content = renderToString(<App store={store} />);
  return `
    <html lang="ko">
      <head>
        <title>SSR</title>
        <link rel="stylesheet" href="${stylesheetUrl}" />
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
    `;
};

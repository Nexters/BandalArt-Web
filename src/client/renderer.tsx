import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './view/App';

export const renderer = () => {
  const content = renderToString(<App />);
  return `
    <html lang="ko">
      <head>
        <title>SSR</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
    `;
};

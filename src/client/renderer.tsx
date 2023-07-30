import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './view/App';

export const renderer = ({ stylesheetUrl }: { stylesheetUrl: string }) => {
  const content = renderToString(<App />);
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

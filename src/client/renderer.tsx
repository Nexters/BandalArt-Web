import React from 'react';
import { renderToString } from 'react-dom/server';

export const renderer = () => {
  const content = renderToString(<div>hello</div>);
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
    `;
};

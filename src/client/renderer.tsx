import React from 'react';
import { renderToString } from 'react-dom/server';
import { Store } from 'redux';
import { App } from './view/App';
import { NotFoundPage } from './view/pages/404';
import { ExpiredPage } from './view/pages/expired';

const defaultHtml = (assetPath: string, content: string) => `    
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta name="description" content="부담감은 적게, 목표는 크게">
        <meta property="og:title" content="반다라트">
        <meta property="og:description" content="부담감은 적게, 목표는 크게">
        <meta property="og:image" content="${assetPath}/image/ogimage.png">
        <title>반다라트</title>
        <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-dynamic-subset.css" />
        <link rel="stylesheet" href="${assetPath}/styles.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="${assetPath}/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="${assetPath}/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="${assetPath}/favicon/favicon-16x16.png">
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>`;

type AppProps = {
  assetPath: string;
  isMobile: boolean;
  appDownloadUrl: string;
};

export const renderer = ({
  store,
  ...props
}: {
  store: Store;
} & AppProps) => {
  try {
    const content = renderToString(<App store={store} {...props} />);
    return defaultHtml(props.assetPath, content);
  } catch (e) {
    return renderNotFound(props);
  }
};

export const renderNotFound = (props: AppProps) => {
  const content = renderToString(<NotFoundPage {...props} />);
  return defaultHtml(props.assetPath, content);
};

export const renderExpired = (props: AppProps) => {
  const content = renderToString(<ExpiredPage {...props} />);
  return defaultHtml(props.assetPath, content);
};

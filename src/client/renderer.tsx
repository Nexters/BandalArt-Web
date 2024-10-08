import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Store } from 'redux';
import { App } from './view/App';
import { NotFoundPage } from './view/pages/404';
import { ExpiredPage } from './view/pages/expired';
import { Platform } from '../server/types/platform';
import { ErrorPage } from './view/pages/error';

const defaultHtml = (assetPath: string, content: string) => `    
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GNDJL4812E"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'G-GNDJL4812E');
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta name="description" content="당신의 목표를 더욱 선명하게">
        <meta property="og:title" content="반다라트">
        <meta property="og:description" content="당신의 목표를 더욱 선명하게">
        <meta property="og:image" content="${assetPath}/image/ogimage.png">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
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
  platform: Platform;
};

export const renderer = ({
  store,
  ...props
}: {
  store: Store;
} & AppProps) => {
  try {
    const content = renderToStaticMarkup(<App store={store} {...props} />);
    return defaultHtml(props.assetPath, content);
  } catch (e) {
    return renderNotFound(props);
  }
};

export const renderNotFound = (props: AppProps) => {
  const content = renderToStaticMarkup(<NotFoundPage {...props} />);
  return defaultHtml(props.assetPath, content);
};

export const renderExpired = (props: AppProps) => {
  const content = renderToStaticMarkup(<ExpiredPage {...props} />);
  return defaultHtml(props.assetPath, content);
};

export const renderError = (props: AppProps) => {
  const content = renderToStaticMarkup(<ErrorPage {...props} />);
  return defaultHtml(props.assetPath, content);
};

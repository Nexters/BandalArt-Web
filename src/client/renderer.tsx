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
  try {
    const content = renderToString(<App store={store} />);
    return `
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta name="description" content="작은 행동이 모여서 큰 목표를 이룹니다">
        <title>반다라트</title>
        <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-dynamic-subset.css" />
        <link rel="stylesheet" href="${stylesheetUrl}" />
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
    `;
  } catch (e) {
    console.error(e);
    return `<html lang="ko">
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
              <title>반다라트</title>
              <link rel="stylesheet" as="style" crossOrigin
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"/>
              <link rel="stylesheet" href="${stylesheetUrl}"/>
      </head>
      <body>
      <div id="root">에러가 발생했어요!!</div>
      </body>
      </html>`;
  }
};

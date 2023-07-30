import React from 'react';
import { css } from '@linaria/core';
import { initApiClient } from '../../agent/ApiClient';

initApiClient();

export const App = () => {
  return <div className={style}>hi</div>;
};

const style = css`
  background-color: red;
`;

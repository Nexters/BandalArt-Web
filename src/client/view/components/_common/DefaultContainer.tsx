import { cx } from '@linaria/core';
import { globalStyle } from '../../styles/globalStyles';
import React, { ReactNode } from 'react';
import { EnvContextProvider } from '../context/EnvContext';

type Props = {
  children: ReactNode;
  assetPath: string;
};

export const DefaultContainer = ({ assetPath, children }: Props) => (
  <div className={cx(globalStyle, 'theme-light')}>
    <EnvContextProvider assetPath={assetPath}>{children}</EnvContextProvider>
  </div>
);

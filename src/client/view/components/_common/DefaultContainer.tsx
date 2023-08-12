import { cx } from '@linaria/core';
import { globalStyle } from '../../styles/globalStyles';
import React, { ReactNode } from 'react';
import { EnvContextProvider } from '../context/EnvContext';

type Props = {
  children: ReactNode;
  assetPath: string;
  isMobile: boolean;
  appDownloadUrl: string;
};

export const DefaultContainer = ({ children, ...props }: Props) => (
  <div className={cx(globalStyle, 'theme-light')}>
    <EnvContextProvider {...props}>{children}</EnvContextProvider>
  </div>
);

import { cx } from '@linaria/core';
import { globalStyle } from '../../styles/globalStyles';
import React, { ReactNode } from 'react';
import { EnvContextProvider } from '../context/EnvContext';

type Props = {
  children: ReactNode;
  assetPath: string;
  isMobile: boolean;
};

export const DefaultContainer = ({ assetPath, isMobile, children }: Props) => (
  <div className={cx(globalStyle, 'theme-light')}>
    <EnvContextProvider assetPath={assetPath} isMobile={isMobile}>
      {children}
    </EnvContextProvider>
  </div>
);

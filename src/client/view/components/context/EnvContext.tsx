import React, { createContext, PropsWithChildren } from 'react';
import { Platform } from '../../../../server/types/platform';

type EnvContextState = {
  assetPath: string;
  isMobile: boolean;
  appDownloadUrl: string;
  platform: Platform;
};

const initialState: EnvContextState = {
  assetPath: '',
  isMobile: false,
  appDownloadUrl: '',
  platform: 'desktop',
};

export const EnvContext = createContext(initialState);

export const EnvContextProvider = ({
  children,
  ...props
}: PropsWithChildren<EnvContextState>) => {
  return (
    <EnvContext.Provider value={{ ...initialState, ...props }}>
      {children}
    </EnvContext.Provider>
  );
};

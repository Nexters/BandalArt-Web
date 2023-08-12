import React, { createContext, PropsWithChildren } from 'react';

type EnvContextState = {
  assetPath: string;
  isMobile: boolean;
  appDownloadUrl: string;
};

const initialState: EnvContextState = {
  assetPath: '',
  isMobile: false,
  appDownloadUrl: '',
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

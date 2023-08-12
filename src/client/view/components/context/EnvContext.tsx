import React, { createContext, PropsWithChildren } from 'react';

type EnvContextState = {
  assetPath: string;
  isMobile: boolean;
};

const initialState: EnvContextState = {
  assetPath: '',
  isMobile: false,
};

export const EnvContext = createContext(initialState);

export const EnvContextProvider = ({
  children,
  assetPath,
  isMobile,
}: PropsWithChildren<EnvContextState>) => {
  return (
    <EnvContext.Provider value={{ ...initialState, assetPath, isMobile }}>
      {children}
    </EnvContext.Provider>
  );
};

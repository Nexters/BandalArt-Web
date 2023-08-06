import React, { createContext, PropsWithChildren } from 'react';

type EnvContextState = {
  assetPath: string;
};

const initialState: EnvContextState = {
  assetPath: '',
};

export const EnvContext = createContext(initialState);

export const EnvContextProvider = ({
  children,
  assetPath,
}: PropsWithChildren<EnvContextState>) => {
  return (
    <EnvContext.Provider value={{ ...initialState, assetPath }}>
      {children}
    </EnvContext.Provider>
  );
};

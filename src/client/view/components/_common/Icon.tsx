import React, { useContext } from 'react';
import { EnvContext } from '../context/EnvContext';
import { LinariaClassName } from '@linaria/core';

export type IconProps = {
  className: LinariaClassName;
  alt: string;
  iconName: IconName;
};

type IconName = 'check';

export const Icon = ({ className, alt, iconName }: IconProps) => {
  const { assetPath } = useContext(EnvContext);
  return (
    <img
      className={className}
      src={`${assetPath}/icon/${iconName}.svg`}
      alt={alt}
    />
  );
};

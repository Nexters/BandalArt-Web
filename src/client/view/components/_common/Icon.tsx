import React, { useContext } from 'react';
import { EnvContext } from '../context/EnvContext';
import { LinariaClassName } from '@linaria/core';

export type IconProps = {
  className?: LinariaClassName;
  alt: string;
  iconName: IconName;
  size?: number;
};

const IconNameList = ['check', 'warning', 'hourglass'] as const;

export type IconName = (typeof IconNameList)[number];

export const Icon = ({ className, alt, iconName, size }: IconProps) => {
  const { assetPath } = useContext(EnvContext);
  return (
    <img
      className={className}
      src={`${assetPath}/icon/${iconName}.svg`}
      alt={alt}
      style={{
        width: size ? `${size}px` : undefined,
        height: size ? `${size}px` : undefined,
      }}
    />
  );
};

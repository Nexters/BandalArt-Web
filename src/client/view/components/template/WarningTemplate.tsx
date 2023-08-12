import React from 'react';
import { Icon, IconName } from '../_common/Icon';
import { css } from '@linaria/core';

type Props = {
  iconName: IconName;
  title: string;
  description?: string;
  iconSize?: number;
};

export const WarningTemplate = ({
  title,
  description,
  iconName,
  iconSize,
}: Props) => (
  <div className={container}>
    <div className={iconWrapper}>
      <Icon iconName={iconName} alt={'icon'} size={iconSize} />
    </div>
    <h2 className={titleStyle}>{title}</h2>
    <p className={descriptionStyle}>{description}</p>
  </div>
);

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const iconWrapper = css`
  height: 80px;
  width: 80px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const titleStyle = css`
  color: var(--color-600);
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;
  text-align: center;
`;

const descriptionStyle = css`
  margin-top: 6px;
  color: var(--color-400);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
`;

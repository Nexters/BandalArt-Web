import React from 'react';
import { WarningTemplate } from '../../components/template/WarningTemplate';
import { DefaultContainer } from '../../components/_common/DefaultContainer';
import { css } from '@linaria/core';

export const NotFoundPage = ({ assetPath }: { assetPath: string }) => (
  <DefaultContainer assetPath={assetPath}>
    <div className={container}>
      <WarningTemplate
        iconName={'warning'}
        title={'존재하지 않는 페이지에요'}
        iconSize={53}
      />
    </div>
  </DefaultContainer>
);

const container = css`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

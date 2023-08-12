import React from 'react';
import { WarningTemplate } from '../../components/template/WarningTemplate';
import { DefaultContainer } from '../../components/_common/DefaultContainer';
import { css } from '@linaria/core';

export const ExpiredPage = ({ assetPath }: { assetPath: string }) => (
  <DefaultContainer assetPath={assetPath}>
    <div className={container}>
      <WarningTemplate
        iconName={'hourglass'}
        title={'유효기간이 만료된 페이지에요'}
        description={'링크는 생성된 이후 7일 동안 볼 수 있어요'}
        iconSize={46}
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

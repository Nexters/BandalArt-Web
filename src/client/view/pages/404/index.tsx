import React from 'react';
import { WarningTemplate } from '../../components/template/WarningTemplate';
import { DefaultContainer } from '../../components/_common/DefaultContainer';
import { css } from '@linaria/core';
import { AppProps } from '../../types/app';
import { AppDownload } from '../../components/banner/AppDownload';

export const NotFoundPage = ({ assetPath, isMobile }: AppProps) => (
  <DefaultContainer assetPath={assetPath} isMobile={isMobile}>
    <div className={container}>
      {isMobile && <AppDownload />}
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

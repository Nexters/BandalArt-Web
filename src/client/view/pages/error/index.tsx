import React from 'react';
import { WarningTemplate } from '../../components/template/WarningTemplate';
import { DefaultContainer } from '../../components/_common/DefaultContainer';
import { css } from '@linaria/core';
import { AppProps } from '../../types/app';
import { AppDownload } from '../../components/banner/AppDownload';
import { useShowAppDownloadBanner } from '../../components/banner/useShowAppDownloadBanner';

export const ErrorPage = (props: AppProps) => {
  const showDownloadBanner = useShowAppDownloadBanner();
  return (
    <DefaultContainer {...props}>
      <div className={container}>
        {showDownloadBanner && <AppDownload />}
        <WarningTemplate
          iconName={'warning'}
          title={'에러가 발생했어요'}
          iconSize={53}
        />
      </div>
    </DefaultContainer>
  );
};

const container = css`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

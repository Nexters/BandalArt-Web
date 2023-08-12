import React, { useContext } from 'react';
import { css } from '@linaria/core';
import { EnvContext } from '../context/EnvContext';

export const AppDownload = () => {
  const { assetPath, appDownloadUrl } = useContext(EnvContext);
  return (
    <div className={container}>
      <div className={logoContainer}>
        <img src={`${assetPath}/image/logo.png`} alt={'app logo'} />
      </div>
      <span className={title}>지금 나만의 반다라트를 만들어봐요</span>
      <a
        className={downloadButton}
        href={appDownloadUrl}
        target={'_blank'}
        rel={'noreferrer noopener'}
        title={'앱 다운로드'}
      >
        앱 다운로드
      </a>
    </div>
  );
};

const container = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  height: 62px;

  display: flex;
  align-items: center;
  padding: 0 16px;

  border-bottom: 1px solid var(--color-100);
`;

const logoContainer = css`
  width: 37px;
  height: 37px;
  border-radius: 16px;
  display: flex;
  filter: drop-shadow(0px 1px 1px rgba(17, 24, 39, 0.1));
  margin-right: 12px;
`;

const title = css`
  color: var(--color-700);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.24px;
`;

const downloadButton = css`
  padding: 6px 12px;
  background-color: var(--color-700);
  border-radius: 88px;
  text-align: center;

  // font
  font-weight: 700;
  font-size: 12px;
  letter-spacing: -0.24px;
  color: #fff;

  text-decoration: none;

  margin-left: auto;
`;

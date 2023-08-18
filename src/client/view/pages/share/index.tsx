import React, { CSSProperties, useContext } from 'react';
import { css } from '@linaria/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../../stores/createStore';
import { HeaderSection } from '../../components/HeaderSection';
import { Table } from '../../components/table/Table';
import { TABLE_SIZE } from '../../constants/table';
import { AppDownload } from '../../components/banner/AppDownload';
import { EnvContext } from '../../components/context/EnvContext';

export const BandalartSharePage = () => {
  const detail = useSelector((state: RootState) => state.bandalartDetail);
  const treeRoot = useSelector((state: RootState) => state.bandalartTree)!;

  const completionRatio = treeRoot.completionRatio;

  const { isMobile } = useContext(EnvContext);

  return (
    <div
      className={container}
      style={
        {
          ['--main-color']: detail.mainColor,
          ['--sub-color']: detail.subColor,
        } as CSSProperties
      }
    >
      {isMobile && <AppDownload />}
      <HeaderSection detail={detail} completionRatio={completionRatio} />
      <main className={mainStyle}>
        <Table root={treeRoot} />
      </main>
    </div>
  );
};

const container = css`
  width: ${TABLE_SIZE}px;
  min-height: 100dvh;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 18px;
  padding: 0 16px;
`;

const mainStyle = css``;

import React from 'react';
import { css } from '@linaria/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/createStore';
import { HeaderSection } from './components/HeaderSection';
import { Table } from './components/Table';
import { TABLE_SIZE } from '../constants/table';

export const BandalartSharePage = () => {
  const detail = useSelector((state: RootState) => state.bandalartDetail);
  const treeRoot = useSelector((state: RootState) => state.bandalartTree)!;

  const completionRatio = treeRoot.completionRatio;

  return (
    <div className={container}>
      <HeaderSection detail={detail} completionRatio={completionRatio} />
      <Table root={treeRoot} />
    </div>
  );
};

const container = css`
  width: ${TABLE_SIZE}px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 18px;
`;

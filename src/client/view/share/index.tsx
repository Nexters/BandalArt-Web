import React from 'react';
import { css } from '@linaria/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/createStore';
import { HeaderSection } from './components/HeaderSection';

export const BandalartSharePage = () => {
  const detail = useSelector((state: RootState) => state.bandalartDetail);
  const cells = useSelector((state: RootState) => state.bandalartCells);

  const completionRatio = cells[0].completionRatio;

  return (
    <div className={container}>
      <HeaderSection detail={detail} completionRatio={completionRatio} />

      {cells.map((cell) => (
        <p key={cell.key}>{cell.title}</p>
      ))}
    </div>
  );
};

const container = css`
  width: 375px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

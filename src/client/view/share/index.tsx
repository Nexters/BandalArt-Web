import React from 'react';
import { css } from '@linaria/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/createStore';

export const BandalartSharePage = () => {
  const detail = useSelector((state: RootState) => state.bandalartDetail);
  const cells = useSelector((state: RootState) => state.bandalartCells);
  return (
    <div className={style}>
      {detail.title}
      {cells.map((cell) => (
        <p key={cell.key}>{cell.title}</p>
      ))}
    </div>
  );
};

const style = css`
  background-color: #fbfbfb;
`;

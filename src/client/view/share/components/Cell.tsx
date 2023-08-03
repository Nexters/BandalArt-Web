import { css, cx } from '@linaria/core';
import React from 'react';
import { Check } from '../../icons/Check';
import { CELL_SIZE, TABLE_SIZE } from '../../constants/table';

type CellType = 'main' | 'sub' | 'task';

type CellProps = {
  type: CellType;
  title: string | null;
  isCompleted: boolean;
};

export const Cell = ({ type, title, isCompleted }: CellProps) => {
  const className = cx(
    baseCellBox,
    type === 'sub' && subCellBox,
    type === 'main' && mainCellBox,
    type === 'task' && isCompleted && 'completed',
  );
  return (
    <div className={className}>
      {title}
      {isCompleted && (
        <div className={completedDim}>
          <Check />
        </div>
      )}
    </div>
  );
};

const baseCellBox = css`
  user-select: none;

  position: relative;
  overflow: hidden;

  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  background-color: #fff;
  border-radius: 10px;

  font-family: Pretendard, sans-serif;
  font-size: 12px;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;
  word-break: keep-all;
  text-align: center;

  &.completed {
    background-color: var(--color-200);
    color: var(--color-400);
  }
`;

const subCellBox = css`
  background-color: var(--sub-color);
  color: var(--main-color);
  font-weight: 700;
`;

const mainCellBox = css`
  background-color: var(--main-color);
  color: var(--sub-color);
  font-weight: 700;

  position: absolute;
  top: calc((${TABLE_SIZE} - ${CELL_SIZE}) / 2 * 1px);
  left: calc((${TABLE_SIZE} - ${CELL_SIZE}) / 2 * 1px);
`;

const completedDim = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    bottom: 4px;
    right: 4px;
  }
`;

import { css, cx } from '@linaria/core';
import React from 'react';
import { CELL_SIZE, TABLE_SIZE } from '../../constants/table';
import { Icon } from '../_common/Icon';

type CellType = 'main' | 'sub' | 'task';

type CellProps = {
  type: CellType;
  title: string | null;
  isCompleted: boolean;
  position?: CellPosition;
};

export type CellPosition = 'lt' | 'rt' | 'lb' | 'rb' | 'center';

export const Cell = ({ type, title, isCompleted, position }: CellProps) => {
  const className = cx(
    baseCellBox,
    type === 'sub' && subCellBox,
    type === 'main' && mainCellBox,
    type === 'task' && isCompleted && 'completed',
    type !== 'task' && position && positionToStyle[position],
  );
  return (
    <div role={'checkbox'} className={className} aria-checked={isCompleted}>
      {title}
      {isCompleted && (
        <Icon className={icon} iconName={'check'} alt={'달성 완료 체크 표시'} />
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
  position: absolute;
  background-color: var(--sub-color);
  color: var(--main-color);
  font-weight: 700;
  z-index: 1;
`;

const mainCellBox = css`
  background-color: var(--main-color);
  color: var(--sub-color);
  font-weight: 700;

  position: absolute;
`;

const center = css`
  top: calc((${TABLE_SIZE} - ${CELL_SIZE}) / 2 * 1px);
  left: calc((${TABLE_SIZE} - ${CELL_SIZE}) / 2 * 1px);
`;
const lt = css`
  top: calc((${TABLE_SIZE} / 2 - ${CELL_SIZE} * 0.5) / 2 * 1px);
  left: calc((${TABLE_SIZE} / 2 - ${CELL_SIZE} * 0.5) / 2 * 1px);
`;
const rt = css`
  top: calc((${TABLE_SIZE} / 2 - ${CELL_SIZE} * 0.5) / 2 * 1px);
  right: calc((${TABLE_SIZE} / 2 - ${CELL_SIZE} * 0.5) / 2 * 1px);
`;
const lb = css`
  bottom: calc((${TABLE_SIZE} / 2 - ${CELL_SIZE} * 0.5) / 2 * 1px);
  left: calc((${TABLE_SIZE} / 2 - ${CELL_SIZE} * 0.5) / 2 * 1px);
`;
const rb = css`
  bottom: calc((${TABLE_SIZE} / 2 - ${CELL_SIZE} * 0.5) / 2 * 1px);
  right: calc((${TABLE_SIZE} / 2 - ${CELL_SIZE} * 0.5) / 2 * 1px);
`;
const positionToStyle = { center, lt, rt, lb, rb } as const;

const icon = css`
  position: absolute;
  bottom: 4px;
  right: 4px;
`;

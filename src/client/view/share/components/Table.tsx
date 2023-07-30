import { BandalartCell } from '../../../../types/BandalartCell';
import React from 'react';
import { css, cx } from '@linaria/core';
import { Cell } from './Cell';
import {
  GAP_BETWEEN_CELLS,
  PADDING_IN_SECTION,
  TABLE_SIZE,
} from '../../constants/table';

type TableProps = {
  root: BandalartCell;
};

const subTaskPosition = [4, 2, 3, 1];
const subSectionPosition = ['lt', 'rt', 'lb', 'rb'];

export const Table = ({ root }: TableProps) => {
  return (
    <div className={container}>
      <Cell type={'main'} title={root.title} isCompleted={root.isCompleted} />
      {root.children.map((subCell, subIdx) => (
        <div
          key={subSectionPosition[subIdx]}
          className={cx(subSection, subSectionPosition[subIdx])}
        >
          {subCell.children.map((task, taskIdx) => (
            <>
              {taskIdx === subTaskPosition[subIdx] && (
                <Cell
                  key={subCell.key}
                  type={'sub'}
                  title={subCell.title}
                  isCompleted={subCell.isCompleted}
                />
              )}
              <Cell
                key={task.key}
                type={'task'}
                title={task.title}
                isCompleted={task.isCompleted}
              />
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

const container = css`
  position: relative;
  width: ${TABLE_SIZE}px;
  height: ${TABLE_SIZE}px;
`;

const subSection = css`
  position: absolute;
  border-radius: 12px;
  background-color: var(--color-100);
  display: grid;
  gap: ${GAP_BETWEEN_CELLS}px;
  padding: ${PADDING_IN_SECTION}px;

  &.lt,
  &.rb {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  &.rt,
  &.lb {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  &.lt {
    top: 0;
    left: 0;
  }

  &.rt {
    top: 0;
    right: 0;
  }

  &.lb {
    bottom: 0;
    left: 0;
  }

  &.rb {
    bottom: 0;
    right: 0;
  }
`;

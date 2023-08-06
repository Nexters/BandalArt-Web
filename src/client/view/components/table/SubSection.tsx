import { Cell, CellPosition } from './Cell';
import { css, cx } from '@linaria/core';
import React from 'react';
import { GAP_BETWEEN_CELLS, PADDING_IN_SECTION } from '../../constants/table';
import { BandalartCell } from '../../../../types/BandalartCell';

type SubSectionProps = {
  subCell: BandalartCell;
  sectionPosition: CellPosition;
  subCellIdxInSection: number;
};

export const SubSection = ({
  subCell,
  sectionPosition,
  subCellIdxInSection,
}: SubSectionProps) => {
  return (
    <ul key={sectionPosition}>
      <li>
        <Cell
          type={'sub'}
          title={subCell.title}
          isCompleted={subCell.isCompleted}
          position={sectionPosition}
        />
        <ul className={cx(subSection, sectionPosition)}>
          {subCell.children.flatMap((task, taskIdx) => [
            taskIdx === subCellIdxInSection && (
              <li key={taskIdx} aria-hidden="true" />
            ),
            <li key={task.key}>
              <Cell
                type={'task'}
                title={task.title}
                isCompleted={task.isCompleted}
              />
            </li>,
          ])}
        </ul>
      </li>
    </ul>
  );
};

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

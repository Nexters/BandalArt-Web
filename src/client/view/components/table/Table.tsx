import { BandalartCell } from '../../../../types/BandalartCell';
import React from 'react';
import { css } from '@linaria/core';
import { Cell, CellPosition } from './Cell';
import { TABLE_SIZE } from '../../constants/table';
import { SubSection } from './SubSection';

type TableProps = {
  root: BandalartCell;
};

const subTaskPosition = [4, 2, 3, 1];
const subSectionPosition = ['lt', 'rt', 'lb', 'rb'] as CellPosition[];

export const Table = ({ root }: TableProps) => {
  return (
    <ul className={container}>
      <li>
        <Cell
          type={'main'}
          title={root.title}
          isCompleted={root.isCompleted}
          position={'center'}
        />
        {root.children.map((subCell, subIdx) => (
          <SubSection
            key={subCell.key}
            subCell={subCell}
            subCellIdxInSection={subTaskPosition[subIdx]}
            sectionPosition={subSectionPosition[subIdx]}
          />
        ))}
      </li>
    </ul>
  );
};

const container = css`
  position: relative;
  width: ${TABLE_SIZE}px;
  height: ${TABLE_SIZE}px;
`;

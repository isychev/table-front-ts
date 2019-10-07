import * as React from 'react';
import { CellProps } from './types';

const BasicCellRenderer: React.FC<CellProps> = (props: CellProps) => {
  const { cellData, columnData } = props;
  const { className } = columnData;
  return (
    <span
      className={className}
      title={typeof cellData === 'string' ? cellData : ''}
    >
      {cellData}
    </span>
  );
};

BasicCellRenderer.defaultProps = {
  className: 'text-truncate mw-100',
  cellData: null,
};

export default BasicCellRenderer;

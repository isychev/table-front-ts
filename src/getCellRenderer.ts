import { TableCellRenderer } from 'react-virtualized/dist/commonjs/Table';
import BasicCellRenderer from './BasicCellRenderer';

import { CellProps, ColumnConfig } from './types';

const getCellRenderer = (
  columnConfig: ColumnConfig,
  cellRenderers: {
    [key: string]: React.ComponentType<CellProps>;
  },
): TableCellRenderer => {
  const CellRenderer =
    cellRenderers[columnConfig.type || 'text'] || BasicCellRenderer;
  return CellRenderer as TableCellRenderer;
};

export default getCellRenderer;

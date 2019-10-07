import * as React from 'react';
import TableA from './TableA';
import { TableProps } from './types';
import * as CellRenderersDefault from './cellRenderers';

const Table: React.FC<TableProps> = (props: TableProps) => {
  const { cellRenderers: externalCellRenderers } = props;
  return (
    <TableA
      {...props}
      cellRenderers={{ ...CellRenderersDefault, ...externalCellRenderers }}
    />
  );
};

export default Table;

import * as React from 'react';
import { AutoSizer } from 'react-virtualized/dist/commonjs/AutoSizer';
import TableComponent from './TableComponent';
import { TableProps } from './types';

const Table: React.FC<TableProps> = (props: TableProps) => {
  return (
    <AutoSizer>
      {({ width, height }) => (
        <TableComponent {...props} width={width} height={height} />
      )}
    </AutoSizer>
  );
};

export default Table;

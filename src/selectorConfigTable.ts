import selectorTemp from 'base-front-ts/selectorTemp';
import { createSelector } from 'reselect';
import getTableAlias from './getTableAlias';
import { TableConfig, TableProps } from './types';
import getMaxShowRowProps from './getMaxShowRowProps';
import selectorRowDataTable from './selectorRowDataTable';

const selectorTableConfig = createSelector<
  any,
  TableProps,
  any,
  number,
  TableConfig,
  TableConfig | null
>(
  [
    selectorRowDataTable,
    getMaxShowRowProps,
    (state, props) =>
      selectorTemp(state, { ...props, tempAlias: getTableAlias(state, props) }),
  ],
  (
    rowData: any,
    maxShowRowProps: number,
    configTable: TableConfig,
  ): TableConfig | null => {
    if (configTable && configTable.tableParams) {
      const { tableParams } = configTable;
      return {
        ...configTable,
        tableParams: {
          ...tableParams,
          tableHeight: maxShowRowProps
            ? tableParams.headerHeight +
              Math.min(rowData.length, maxShowRowProps) * tableParams.rowHeight
            : tableParams.tableHeight,
        },
      };
    }
    return null;
  },
);

export default selectorTableConfig;

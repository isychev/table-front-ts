import { createSelector } from 'reselect';
import selectorList from 'base-front-ts/selectorList';
import { TableConfig } from './types';
import selectorConfigTable from './selectorConfigTable';
import getHandleFilterProps from './getHandleFilterProps';
import selectorRowDataTable from './selectorRowDataTable';

const selectorTable: any = createSelector<any, any, any, any, any, any, any>(
  [
    selectorRowDataTable,
    selectorConfigTable,
    getHandleFilterProps,
    selectorList,
  ],
  (
    rowData: any,
    tableConfig: TableConfig | null,
    handleFilter: ((data: any) => any) | null,
    originList: any,
  ) => {
    if (tableConfig) {
      const result = {
        originList,
        rowData,
        tableConfig,
        // loading: tableConfig.loading,
      };

      if (handleFilter) {
        return handleFilter(result);
      }
      return result;
    }
    return {};
  },
);

export default selectorTable;

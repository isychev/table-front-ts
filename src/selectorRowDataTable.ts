import selectorList from 'base-front-ts/selectorList';
import { createSelector } from 'reselect';
import { FieldMap } from './types';
import getExternalProps from './getExternalProps';
import getHandleTransformProps from './getHandleTransformProps';
import getRowDataProps from './getRowDataProps';
import processFormData from './processFormData';
import selectorFieldsMapTable from './selectorFieldsMap';

const selectorRowDataTable: any = createSelector<
  any,
  any,
  FieldMap | null,
  any,
  ((data: any) => any) | null,
  object | null,
  object[] | null,
  any
>(
  [
    selectorFieldsMapTable,
    selectorList,
    getHandleTransformProps,
    getExternalProps,
    getRowDataProps,
  ],
  (
    fieldsMap: FieldMap | null,
    rowData = [],
    handleTransform: ((data: any) => any) | null,
    externalData = {},
    externalRowData: any,
  ) => {
    if (!fieldsMap) {
      return [];
    }
    const normalizeRowData = externalRowData || rowData || [];

    const transformData = handleTransform
      ? handleTransform(normalizeRowData)
      : normalizeRowData;

    return transformData.map((row: object) => ({
      ...processFormData(row, fieldsMap),
      ...externalData,
    }));
  },
);

export default selectorRowDataTable;

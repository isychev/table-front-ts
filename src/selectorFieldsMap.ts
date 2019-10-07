import selectorTemp from 'base-front-ts/selectorTemp';
import { FieldMap, TableConfig, TableProps } from './types';
import getTableAlias from './getTableAlias';

const selectorFieldsMapTable = (
  state: any,
  props: TableProps,
): FieldMap | null => {
  const tableConfig: TableConfig | null = selectorTemp(state, {
    ...props,
    tempAlias: getTableAlias(state, props),
  });
  if (tableConfig && tableConfig.fieldsMap) {
    return tableConfig.fieldsMap;
  }
  return null;
};

export default selectorFieldsMapTable;

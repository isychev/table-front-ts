import { TablePayload } from './types';

const getTableAlias = (_: any, props: TablePayload): string =>
  props.tableAlias || '';

export default getTableAlias;

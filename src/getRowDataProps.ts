import { TableProps } from './types';

export const getRowDataProps = (_: any, props: TableProps): object[] | null =>
  (props && props.rowData) || null;

export default getRowDataProps;

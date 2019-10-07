import { TableProps } from './types';

const getHandleFilterProps = (
  _: any,
  props: TableProps,
): ((data: any) => any) | null =>
  props && props.handleFilter ? props.handleFilter : null;

export default getHandleFilterProps;

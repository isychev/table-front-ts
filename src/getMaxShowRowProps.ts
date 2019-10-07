import { TableProps } from './types';

const getMaxShowRowProps = (_: any, props: TableProps): number =>
  (props && props.maxShowRow) || 0;

export default getMaxShowRowProps;

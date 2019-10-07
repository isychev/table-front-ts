import { TableProps } from './types';

const getExternalProps = (_: any, props: TableProps): object | null =>
  (props && props.externalData) || null;

export default getExternalProps;

import { TableProps } from './types';

export const getHandleTransformProps = (
  _: any,
  props: TableProps,
): ((data: any) => any) | null =>
  props && props.handleTransform ? props.handleTransform : null;

export default getHandleTransformProps;

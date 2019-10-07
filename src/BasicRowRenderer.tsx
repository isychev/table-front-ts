import * as React from 'react';
import { BasicRowRendererProps } from './types';

const BasicRowRenderer: React.FC<BasicRowRendererProps> = (
  props: BasicRowRendererProps,
) => {
  const { className, style, columns, config = {}, rowData } = props;
  const { rowClassName } = config;

  let newRowClassName = '';
  if (typeof rowClassName === 'function') {
    newRowClassName = rowClassName(rowData);
  } else if (typeof rowClassName === 'string') {
    newRowClassName = rowClassName;
  }
  return (
    <div
      className={[className, newRowClassName].join(' ')}
      role="row"
      style={style}
    >
      {columns}
    </div>
  );
};

BasicRowRenderer.defaultProps = {
  // className: "",
  // style: null,
  // columns: [],
};

export default BasicRowRenderer;

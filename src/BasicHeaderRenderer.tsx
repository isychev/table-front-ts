import * as React from 'react';
import { TableHeaderProps } from 'react-virtualized/dist/commonjs/Table';

const BasicHeaderRenderer: React.FC<TableHeaderProps> = ({
  label,
}: TableHeaderProps) => (
  <span className="ReactVirtualized__Table__headerTruncatedText">
    <small key="label" title={typeof label === 'string' ? label : ''}>
      {label}
    </small>
  </span>
);

BasicHeaderRenderer.defaultProps = {
  // dataKey: null,
  // label: "",
};

export default BasicHeaderRenderer;

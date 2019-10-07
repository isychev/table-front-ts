import * as React from 'react';
import { CellProps } from './types';
// import { getFormatDate } from '../../../../utils';
import BasicCellRenderer from './BasicCellRenderer';

const DateCellRenderer: React.FC<CellProps> = (props: CellProps) => (
  // const newCellData = getFormatDate(props.cellData);
  <BasicCellRenderer {...props} cellData="newCellData" />
);

DateCellRenderer.propTypes = { ...BasicCellRenderer.propTypes };
DateCellRenderer.defaultProps = { ...BasicCellRenderer.defaultProps };

export default DateCellRenderer;

import * as React from 'react';
import { CellProps } from './types';
import BasicCellRenderer from './BasicCellRenderer';

const CurrencyCellRenderer: React.FC<CellProps> = (props: CellProps) => (
  // const newCellData = getFormatCurrency(props.cellData);
  <BasicCellRenderer {...props} cellData="newCellData" />
);
CurrencyCellRenderer.propTypes = { ...BasicCellRenderer.propTypes };
CurrencyCellRenderer.defaultProps = { ...BasicCellRenderer.defaultProps };

export default CurrencyCellRenderer;

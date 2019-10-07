import * as React from 'react';
import { CellProps } from './types';
import BasicCellRenderer from './BasicCellRenderer';

const ActionCellRenderer: React.FC<CellProps> = (props: CellProps) => {
  const { columnData, rowData } = props;
  const { elementClassName, text, action } = columnData;
  if (action) {
    const actionFunction = rowData[action];
    const newValue = (
      <button
        type="button"
        onClick={() => actionFunction(rowData)}
        className={elementClassName}
      >
        {text}
      </button>
    );
    return <BasicCellRenderer {...props} cellData={newValue} />;
  }
  return null;
};

ActionCellRenderer.propTypes = { ...BasicCellRenderer.propTypes };
ActionCellRenderer.defaultProps = { ...BasicCellRenderer.defaultProps };

export default ActionCellRenderer;

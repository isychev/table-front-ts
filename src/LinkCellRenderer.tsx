import * as React from 'react';
import routing from 'base-front-ts/routing';
import { Link } from 'react-router-dom';
import BasicCellRenderer from './BasicCellRenderer';
import { CellProps } from './types';

const LinkCellRenderer: React.FC<CellProps> = (props: CellProps) => {
  const { columnData, rowData } = props;
  const { url, elementClassName, text, target, sync } = columnData;
  if (url) {
    const newUrl = routing.generateFromData(url, rowData);
    const linkProps = {
      to: newUrl,
      className: elementClassName,
      target,
      sync,
    };
    return (
      <BasicCellRenderer
        {...props}
        cellData={<Link {...linkProps}>{text}</Link>}
      />
    );
  }
  return null;
};

LinkCellRenderer.propTypes = { ...BasicCellRenderer.propTypes };
LinkCellRenderer.defaultProps = { ...BasicCellRenderer.defaultProps };

export default LinkCellRenderer;

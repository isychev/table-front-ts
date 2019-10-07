import * as React from 'react';
import BasicRowRenderer from './BasicRowRenderer';
// import getLinkRowRenderer from './getLinkRowRenderer';
// import BasicCellRenderer from '../CellRenderer/Renderers/BasicCellRenderer';
// import getCollapseRowRenderer from './getCollapseRowRenderer';
// import getAdditionRowRenderer from './getAdditionRowRenderer';

const getBasicRowRender = (params: any) => (props: any) => (
  <BasicRowRenderer {...params} {...props} />
);

export default getBasicRowRender;

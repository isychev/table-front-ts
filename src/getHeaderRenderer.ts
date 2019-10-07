import { TableHeaderRenderer } from 'react-virtualized/dist/commonjs/Table';
import BasicHeaderRenderer from './BasicHeaderRenderer';
import { TGetHeaderRenderer } from './types';

const getHeaderRenderer: TGetHeaderRenderer = (): TableHeaderRenderer =>
  BasicHeaderRenderer as TableHeaderRenderer;

export default getHeaderRenderer;

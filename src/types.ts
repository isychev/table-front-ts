import { RoutingUrlParams } from 'base-front-ts/routing';
import * as React from 'react';
import {
  ColumnProps,
  TableCellDataGetter,
  TableCellProps,
  TableHeaderRenderer,
} from 'react-virtualized/dist/commonjs/Table';

export interface TablePayload {
  tableAlias: string;
}

export interface TableProps {
  tableAlias: string;
  tableConfig: TableConfig;
  cellWidth?: number;
  onRowsRendered?: any;
  noRowsRenderer?: any;
  registerChild?: any;
  onHeaderClick?: any;
  onInit?: (data: any) => void;
  handleFilter?: (data: any) => void;
  handleTransform?: (data: any) => void;
  rowData?: any[];
  loading?: boolean;
  listAlias?: string;
  formAlias?: string;
  maxShowRow?: number;
  autoLoad?: boolean;
  externalData?: any;
  rowHeights?: number;
  cellRenderers?: {
    [key: string]: React.ComponentType<CellProps>;
  };
  cellDataGetters?: {
    [key: string]: TableCellDataGetter;
  };
  external?: {
    [key: string]: any;
  };
  getHeaderRenderer?: TGetHeaderRenderer;
  getHeaderClassName?: TGetHeaderClassName;
  getColumnClassName?: TGetColumnClassName;
  width?: number;
  height?: number;
}

export interface FieldMap {
  [key: string]: string | string[];
}
export interface TableParams {
  rowHeight: number;
  headerHeight: number;
  tableHeight?: number;
  url?:
    | {
        routingName: string;
        routingParams: any;
      }
    | string;
}
export interface TableConfig {
  fieldsMap: FieldMap;
  columns: ColumnConfig[];
  tableParams: TableParams;
  [key: string]: any;
}

export interface ColumnConfig extends ColumnProps {
  dataKey: string;
  width: number;
  key?: string;
  action?: string;
  url?: RoutingUrlParams;
  target?: string;
  type?: string;
  align?: string;
  text?: string;
  label?: string;
  elementClassName?: string;
  nameDataGetter?: string;
  [key: string]: any;
}

export interface ColumnData extends ColumnConfig {
  externalData?: {
    [key: string]: any;
  };
}

export interface CellProps extends TableCellProps, ColumnData {
  dataKey: string;
  columnData: ColumnData;
}

export type TGetHeaderClassName = (column: ColumnConfig) => string;
export type TGetColumnClassName = (column: ColumnConfig) => string;
export type TGetHeaderRenderer = (column?: ColumnConfig) => TableHeaderRenderer;

export interface BasicRowRendererProps {
  className: string;
  style: any;
  columns: any;
  config: any;
  rowData: any;
}

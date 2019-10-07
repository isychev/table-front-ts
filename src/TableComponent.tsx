// import { selectorTable } from "../../selectors";
import * as React from 'react';
import {
  Column,
  Table as ReactTableComponent,
  TableHeaderRenderer,
  TableCellDataGetter,
  TableCellRenderer,
} from 'react-virtualized/dist/commonjs/Table';

import getCellRenderer from './getCellRenderer';

import {
  getColumnClassName as getColumnClassNameDefault,
  getHeaderClassName as getHeaderClassNameDefault,
} from './getClassName';
import getHeaderRendererDefault from './getHeaderRenderer';
import getRowRenderer from './getRowRenderer';

import { ColumnConfig, TableProps } from './types';
import { DEFAULT_TABLE_CELL_WIDTH } from './constantsTable';

class TableComponent extends React.PureComponent<TableProps> {
  public static defaultProps = {
    cellWidth: DEFAULT_TABLE_CELL_WIDTH,
    rowData: [],
    tableConfig: {},
    cellRenderers: {},
    cellDataGetters: {},
    externalSelector: null,
    loading: false,
    getHeaderRenderer: getHeaderRendererDefault,
    getHeaderClassName: getHeaderClassNameDefault,
    getColumnClassName: getColumnClassNameDefault,
    noRowsRenderer: () => <div className="no-data-table">No Data</div>,
  };

  public state = {
    columns: [],
  };

  public componentDidMount() {
    const {
      onInit,
      tableAlias,
      tableConfig,
      listAlias,
      formAlias,
      autoLoad = true,
      externalData = {},
    } = this.props;
    if (onInit) {
      onInit({
        ...tableConfig,
        tableAlias,
        listAlias,
        formAlias,
        autoLoad,
        externalData,
      });
      this.setTableColumns(this.props);
    }
  }

  public getHeaderRenderer = (column: ColumnConfig): TableHeaderRenderer => {
    const { getHeaderRenderer } = this.props;
    if (getHeaderRenderer) {
      return getHeaderRenderer(column);
    }
    return getHeaderRendererDefault(column);
  };

  public getHeaderClassName = (column: ColumnConfig): string => {
    const { getHeaderClassName } = this.props;
    if (getHeaderClassName) {
      return getHeaderClassName(column);
    }
    return getHeaderClassNameDefault(column);
  };

  public getColumnClassName = (column: ColumnConfig): string => {
    const { getColumnClassName } = this.props;
    if (getColumnClassName) {
      return getColumnClassName(column);
    }
    return getColumnClassNameDefault(column);
  };

  public getCellDataGetter = (column: ColumnConfig): TableCellDataGetter => {
    const { cellDataGetters } = this.props;
    const { nameDataGetter } = column;
    if (
      cellDataGetters &&
      nameDataGetter &&
      typeof nameDataGetter === 'string' &&
      cellDataGetters[nameDataGetter]
    ) {
      return cellDataGetters[nameDataGetter];
    }
    return (f: any) => f;
  };

  public componentWillReceiveProps(nextProps: TableProps) {
    this.setTableColumns(nextProps);
  }

  public getCellRenderer = (column: ColumnConfig): TableCellRenderer => {
    const { cellRenderers } = this.props;
    return getCellRenderer(column, cellRenderers || {});
  };

  public getDefaultColumn = (column: ColumnConfig): ColumnConfig => {
    const { external } = this.props;
    const {
      nameDataGetter,
      type = 'text',
      cellDataGetter,
      dataKey,
      defaultSortDirection,
      disableSort,
      flexGrow,
      flexShrink,
      headerStyle,
      id,
      label,
      maxWidth,
      minWidth,
      style,
      width,
    } = column;
    return {
      key: `${dataKey}${type}`,
      cellDataGetter: nameDataGetter
        ? this.getCellDataGetter(column)
        : cellDataGetter,
      cellRenderer: this.getCellRenderer(column),
      className: this.getColumnClassName(column),
      dataKey,
      defaultSortDirection,
      disableSort,
      flexGrow,
      flexShrink,
      headerClassName: this.getHeaderClassName(column),
      headerRenderer: this.getHeaderRenderer(column),
      headerStyle,
      id,
      label,
      maxWidth,
      minWidth,
      style,
      width,
      columnData: {
        ...column,
        external,
      },
    };
  };

  public setTableColumns = (props: TableProps) => {
    const { tableConfig } = props;
    if (tableConfig && tableConfig.columns) {
      const tableColumns = tableConfig.columns.map((column: ColumnConfig) => {
        const normalizeColumn = this.getDefaultColumn(column);
        return <Column {...normalizeColumn} />;
      });
      this.setState({
        columns: tableColumns,
      });
    }
  };

  public render() {
    const {
      rowData = [],
      tableConfig,
      loading,
      onRowsRendered,
      registerChild,
      onHeaderClick,
      noRowsRenderer,
      width = 0,
      height = 0,
    } = this.props;

    if (!tableConfig || !tableConfig.tableParams) {
      return null;
    }
    const { tableParams } = tableConfig;
      const { headerHeight, rowHeight, tableHeight } = tableParams;
    const { columns } = this.state;
    return (
      <ReactTableComponent
        onRowsRendered={onRowsRendered}
        className={loading ? 'loading' : ''}
        rowRenderer={getRowRenderer(tableConfig)}
        ref={registerChild}
        width={width}
        height={tableHeight || height}
        headerHeight={headerHeight}
        rowHeight={rowHeight}
        rowCount={rowData.length}
        rowGetter={({ index }: { index: number }) => rowData[index]}
        noRowsRenderer={noRowsRenderer}
        onHeaderClick={onHeaderClick}
      >
        {columns}
      </ReactTableComponent>
    );
  }
}

export default TableComponent;

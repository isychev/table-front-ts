import * as React from 'react';
import { connect } from 'react-redux';
import { InfiniteLoader as InfiniteLoaderComponent } from 'react-virtualized/dist/commonjs/InfiniteLoader';
import { Dispatch } from 'redux';
import selectorRowDataTable from './selectorRowDataTable';
import onLoadDataTable from './onLoadDataTable';
import { TableProps } from './types';

export interface IInfiniteLoaderProps {
  onLoadData: (data: any) => void;
  list: any;
  children?: any;
}
const InfiniteLoader: React.FC<IInfiniteLoaderProps> = (
  props: IInfiniteLoaderProps,
) => {
  const { list, onLoadData, children } = props;
  return (
    <InfiniteLoaderComponent
      isRowLoaded={row => list[row.index + 1]}
      loadMoreRows={(row: any): any => {
        onLoadData({
          offset: row.startIndex + 1,
        });
      }}
      rowCount={list.length}
    >
      {children}
    </InfiniteLoaderComponent>
  );
};

InfiniteLoader.defaultProps = {
  list: [],
};

export default connect(
  (state, ownProps) => ({
    list: selectorRowDataTable(state, ownProps),
  }),
  (dispatch: Dispatch, ownProps: TableProps) => ({
    onLoadData: (params: any) =>
      dispatch(
        onLoadDataTable({
          ...params,
          tableAlias: ownProps.tableAlias,
        }),
      ),
  }),
)(InfiniteLoader);

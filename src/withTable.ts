import { compose } from 'recompose';
import { connect } from 'react-redux';
import withSaga from 'redux-saga-connect';
import onInitTable from './onInitTable';
import sagaTable from './sagaTable';
import selectorTable from './selectorTable';
import { TableProps } from './types';

export default compose<TableProps, TableProps>(
  connect(
    selectorTable,
    { onInit: onInitTable },
  ),
  withSaga({ sagaTable }),
);

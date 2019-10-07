import { all, takeEvery } from 'redux-saga/effects';
import {
  CLICK_HEADER,
  INIT_TABLE_CONFIG,
  LOAD_DATA_TABLE,
} from './constantsTable';
import sagaAutoUpdate from './sagaAutoUpdate';
import sagaChangeFilterForm from './sagaChangeFilterForm';
import sagaClickHeader from './sagaClickHeader';
import sagaInitTable from './sagaInitTable';
import sagaLoadDataTable from './sagaLoadDataTable';

export default function* sagaTable() {
  yield all([
    takeEvery(INIT_TABLE_CONFIG, sagaInitTable),
    takeEvery(LOAD_DATA_TABLE, sagaLoadDataTable),
    takeEvery(CLICK_HEADER, sagaClickHeader),
    sagaChangeFilterForm(),
    sagaAutoUpdate(),
  ]);
}

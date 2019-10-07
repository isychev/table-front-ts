import { put } from 'redux-saga/effects';
import { IAction } from 'base-front-ts/types';
import onCreateTemp from 'base-front-ts/onCreateTemp';
import onLoadDataTable from './onLoadDataTable';

export default function* sagaInitTable(action: IAction) {
  const { payload } = action;

  if (payload) {
    const { tableAlias } = payload;
    yield put(
      onCreateTemp({
        data: payload,
        tempAlias: tableAlias,
        hold: true,
      }),
    );
    yield put(onLoadDataTable({ tableAlias }));
  }
}

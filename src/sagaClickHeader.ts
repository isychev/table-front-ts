import { select, put } from 'redux-saga/effects';
import { IAction } from 'base-front-ts/types';
import selectorTemp from 'base-front-ts/selectorTemp';
import onUpdateTemp from 'base-front-ts/onUpdateTemp';
import getNextSortDir from './getNextSortDir';
import onLoadDataTable from './onLoadDataTable';

export default function* sagaClickHeader(action: IAction) {
  const { payload } = action;
  if (payload) {
    const { dataKey, tableAlias } = payload;
    if (tableAlias) {
      const tableConfig = yield select(selectorTemp, {
        tempAlias: tableAlias,
      });

      const sortDir = getNextSortDir(tableConfig.sortDir);
      yield put(
        onUpdateTemp({
          tempAlias: tableAlias,
          value: {
            sortDir,
            sortField: dataKey,
          },
        }),
      );
      yield put(onLoadDataTable({ tableAlias }));
    }
  }
}

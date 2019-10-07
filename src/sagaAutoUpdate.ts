import { take, select, fork, delay, put, cancel } from 'redux-saga/effects';
import onUpdateTemp from 'base-front-ts/onUpdateTemp';
import selectorTemp from 'base-front-ts/selectorTemp';
import { CLICK_AUTO_UPDATE } from './constantsTable';
import onLoadDataTable from './onLoadDataTable';

export function* sagaBgUpdateTable(payload: any) {
  const delayType = payload.delay || 5000;
  while (true) {
    yield delay(delayType);
    yield put(onLoadDataTable(payload));
  }
}

export default function* sagaAutoUpdate() {
  const bgSagaUpdate = {};
  while (true) {
    const action = yield take(CLICK_AUTO_UPDATE);
    const { payload } = action;
    const { tableAlias } = payload;

    const tableConfig = yield select(selectorTemp, {
      tempAlias: tableAlias,
    });
    if (!tableConfig.autoUpdate) {
      bgSagaUpdate[tableAlias] = yield fork(sagaBgUpdateTable, payload);
    } else if (bgSagaUpdate[tableAlias]) {
      yield cancel(bgSagaUpdate[tableAlias]);
    }
    yield put(
      onUpdateTemp({
        tempAlias: tableAlias,
        value: {
          autoUpdate: !tableConfig.autoUpdate,
        },
      }),
    );
  }
}

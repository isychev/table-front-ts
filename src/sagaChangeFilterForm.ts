import { take, put, select } from 'redux-saga/effects';
import { FORM_CHANGE } from 'form-front-ts/constantsForm';
import { IAction } from 'base-front-ts/types';
import selectorTemp from 'base-front-ts/selectorTemp';
import onLoadDataTable from './onLoadDataTable';

export default function* sagaFilterForm() {
  while (true) {
    const action: IAction = yield take(FORM_CHANGE);
    const { payload } = action;
    if (payload) {
      const { tableAlias } = payload;
      if (tableAlias) {
        const tableConfig = yield select(selectorTemp, {
          tempAlias: tableAlias,
        });
        if (tableConfig) {
          yield put(onLoadDataTable({ tableAlias }));
        }
      }
    }
  }
}

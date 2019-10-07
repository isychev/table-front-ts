import selectorFormData from 'form-front-ts/selectorFormData';
import { put, select } from 'redux-saga/effects';
import { IAction } from 'base-front-ts/types';
import selectorTemp from 'base-front-ts/selectorTemp';
import routing from 'base-front-ts/routing';
import { appendGetParameters } from 'base-front-ts';
import onUpdateTemp from 'base-front-ts/onUpdateTemp';
import sagaExecRequest from 'base-front-ts/sagaExecRequest';
import onCreateTemp from 'base-front-ts/onCreateTemp';
import onLoadList from 'base-front-ts/onLoadList';
import { TableConfig } from './types';
import getFilterParamsFromTempData from './getFilterParamsFromTempData';

export default function* sagaLoadMoreList(action: IAction): any {
  const { payload = {} } = action;
  const { offset = 0, tableAlias } = payload;
  const tableConfig: TableConfig = yield select(selectorTemp, {
    tempAlias: tableAlias,
  });

  const {
    tableParams,
    listAlias,
    formAlias,
    externalData,
    count,
    autoLoad,
  } = tableConfig;

  if (tableParams) {
    if (count && offset >= count) {
      return;
    }
    if (tableParams.url && autoLoad) {
      const { url } = tableParams;
      let filterData = getFilterParamsFromTempData(tableConfig);
      if (formAlias) {
        const formData = yield select(selectorFormData, { formAlias });
        filterData = {
          ...formData,
          ...filterData,
        };
      }

      let loadUrlWithoutFilterParams = '';
      if (typeof url !== 'string') {
        loadUrlWithoutFilterParams = routing.generateFromData(
          url,
          externalData,
        );
      } else {
        loadUrlWithoutFilterParams = routing.generate(url, {});
      }

      const loadUrl = appendGetParameters(
        loadUrlWithoutFilterParams,
        offset
          ? {
              offset,
              ...filterData,
            }
          : filterData,
      );
      yield put(
        onUpdateTemp({
          tempAlias: tableAlias,
          ...tableConfig,
          loading: true,
        }),
      );
      const loadedAction = yield sagaExecRequest(
        onLoadList({
          listAlias,
          apiConfig: {
            url: loadUrl,
          },
        }),
      );
      if (loadedAction.payload && loadedAction.payload.data) {
        const { items, ...otherParams } = loadedAction.payload.data;
        yield put(
          onCreateTemp({
            data: {
              ...tableConfig,
              loading: false,
              ...otherParams,
            },
            tempAlias: tableAlias,
          }),
        );
      }
    }
  }
}

import actionCreator from 'base-front-ts/actionCreator';
import { LOAD_DATA_TABLE } from './constantsTable';
import { TablePayload } from './types';

const onLoadDataTable = actionCreator<TablePayload>(LOAD_DATA_TABLE);

export default onLoadDataTable;

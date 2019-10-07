import { actionCreator } from 'base-front-ts/actionCreator';
import { INIT_TABLE_CONFIG } from './constantsTable';
import { TablePayload } from './types';

const onInitTable = actionCreator<TablePayload>(INIT_TABLE_CONFIG);

export default onInitTable;

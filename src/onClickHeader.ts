import actionCreator from 'base-front-ts/actionCreator';
import { CLICK_HEADER } from './constantsTable';
import { TablePayload } from './types';

const onHeaderClick = actionCreator<TablePayload>(CLICK_HEADER, {}, {});

export default onHeaderClick;

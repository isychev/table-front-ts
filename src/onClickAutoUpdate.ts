import actionCreator from 'base-front-ts/actionCreator';
import { CLICK_AUTO_UPDATE } from './constantsTable';
import { TablePayload } from './types';

const onClickAutoUpdate = actionCreator<TablePayload>(CLICK_AUTO_UPDATE);

export default onClickAutoUpdate;

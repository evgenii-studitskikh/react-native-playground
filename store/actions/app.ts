import {
  appConstants,
  SET_ACTIVE_LIST_ITEM,
} from "../constants";
import { IListItem } from '../reducers/app';

export type setActiveListItemType = (item: IListItem) => ({ 
  type: SET_ACTIVE_LIST_ITEM, 
  payload: IListItem 
});

export const setActiveListItem: setActiveListItemType = (item: IListItem) => ({
  type: appConstants.SET_ACTIVE_LIST_ITEM,
  payload: item
});

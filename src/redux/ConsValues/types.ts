export const SET_CONS_ITEM = 'SET_CONS_ITEM';
export const SET_CONS_ITEMS = 'SET_CONS_ITEMS';
export const DELETE_CONS_ITEM = 'DELETE_CONS_ITEM';
export const DELETE_CONS_ITEMS = 'DELETE_CONS_ITEMS';
export const GET_CONS = 'GET_CONS';

export interface SetConsValue {
  type: typeof SET_CONS_ITEM;
  payload: string;
}

export interface SetConsValues {
  type: typeof SET_CONS_ITEMS;
  payload: string;
}

export interface GetConsValue {
  type: typeof GET_CONS;
  payload: {};
}

export interface RemoveConsItem {
  type: typeof DELETE_CONS_ITEM;
  id: string;
}

export interface RemoveConsItems {
  type: typeof DELETE_CONS_ITEMS;
}
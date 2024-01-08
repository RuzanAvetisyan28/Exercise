export const SET_PROS = 'SET_PROS';
export const GET_PROS = 'GET_PROS';
export const SET_PROS_ITEMS = 'SET_PROS_ITEMS';
export const REMOVE_PROS_ITEM = 'REMOVE_PROS_ITEM';
export const DELETE_PROS_ITEMS = 'DELETE_PROS_ITEMS';
export const RENAME_PROS = 'RENAME_PROS';

export interface SetProsValue {
    type: typeof SET_PROS;
    payload: string;
}

export interface SetProsValues {
  type: typeof SET_PROS_ITEMS;
  payload: {};
}

export interface GetProsValue {
  type: typeof GET_PROS;
  payload: {};
}

export interface GetRemoveProsValue {
  type: typeof REMOVE_PROS_ITEM;
  id: number;
}

export interface RemoveProsItems {
  type: typeof DELETE_PROS_ITEMS;
}
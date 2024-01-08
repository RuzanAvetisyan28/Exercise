import { DELETE_CONS_ITEM, SET_CONS_ITEM, SET_CONS_ITEMS, DELETE_CONS_ITEMS, SetConsValue, RENAME_CONS } from "./types";
import { Dispatch } from 'redux';


export const setConsItem = (consValue) => (dispatch: Dispatch) => {
    dispatch<SetConsValue>({
      type: SET_CONS_ITEM,
      payload: consValue,
    });
};

export const setConsItems = (consValue) => (dispatch : Dispatch) => {
  dispatch({
    type: SET_CONS_ITEMS,
    payload: consValue,
  });
};

// export const getConsValues = () => (dispatch: Dispatch) => {
//   const values :any = localStorage.getItem('consValues')
//   const storedValues = JSON.parse(values)
//   dispatch<GetConsValue>({
//     type: GET_CONS,
//     payload:storedValues
//   });
// };

export const deleteConsItems = () => (dispatch: Dispatch) => {
  dispatch({
    type: DELETE_CONS_ITEMS,
  });
};

export const deleteConsItem = (id) => (dispatch: Dispatch) => {
  dispatch({
    type: DELETE_CONS_ITEM,
    payload:id,
  });
};

export const renameConsName = (id, consValue) => (dispatch: Dispatch) => {
  dispatch({
    type: RENAME_CONS,
    payload: id,consValue,
  });
};

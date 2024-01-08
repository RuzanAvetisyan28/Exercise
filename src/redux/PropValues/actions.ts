import { Dispatch } from 'redux';
import { DELETE_PROS_ITEMS, GET_PROS, REMOVE_PROS_ITEM, RENAME_PROS, SET_PROS, SET_PROS_ITEMS } from './types';


export const setProsItem = (prosValue) => (dispatch : Dispatch) => {
    dispatch({
      type: SET_PROS,
      payload: prosValue,
    });
};

export const setProsItems1 = (prosValue) => (dispatch : Dispatch) => {
    dispatch({
      type: SET_PROS_ITEMS,
      payload: prosValue,
    });
};

// export const getProsItems = () => (dispatch: Dispatch) => {
//     dispatch({
//       type: GET_PROS,
//     });
//   };

export const removeProsItem = (id) => (dispatch: Dispatch) => {
  dispatch({
    type: REMOVE_PROS_ITEM,
    payload:id,
  });
};

export const deleteProsItems = (item) => (dispatch: Dispatch) => {
  dispatch({
    type: DELETE_PROS_ITEMS,
  });
};

export const renameProsName = (id, prosValue) => (dispatch: Dispatch) => {
  dispatch({
    type: RENAME_PROS,
    payload: id,prosValue,
  });
};
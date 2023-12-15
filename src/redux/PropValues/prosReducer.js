import { useSelector } from "react-redux";
import { DELETE_PROS_ITEMS, GET_PROS, REMOVE_PROS_ITEM, SET_PROS, SET_PROS_ITEMS } from "./types";

const initialState = {};
  const prosReducer = (state = initialState, action) => {
      switch (action.type) {
        case SET_PROS_ITEMS:
          return action.payload;
        case SET_PROS:
          return {...state, [action.payload.id]:action.payload.prosValue}
        case GET_PROS:
          return action.payload;
        case REMOVE_PROS_ITEM:
          const prosValues = Object.entries(state).filter((item) => item[0] !== action.payload)
          return Object.fromEntries(prosValues);
        case DELETE_PROS_ITEMS:
          return {}
        default:
          return state;
      }
    };

export default prosReducer;
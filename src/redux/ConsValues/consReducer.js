import { SET_CONS_ITEM, GET_CONS, SET_CONS_ITEMS, DELETE_CONS_ITEM, DELETE_CONS_ITEMS, RENAME_CONS} from "./types";

const initialState = {};
const consReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CONS_ITEM:
        return {...state, [action.payload.id]:action.payload.consValue}
      case SET_CONS_ITEMS:
        return action.payload
      case GET_CONS:
        return action.payload
      case DELETE_CONS_ITEM:
        const consValus = Object.entries(state).filter((item) => item[0] !== action.payload)
        return Object.fromEntries(consValus);
      case DELETE_CONS_ITEMS:
        return {};
      case RENAME_CONS:
        const consValues = {...state}
        consValues[action.payload] = action.consValue
        return consValues
      default:
        return state;
    }
  };
  
  export default consReducer;
  
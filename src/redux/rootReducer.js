import { combineReducers } from 'redux';
import consReducer from './ConsValues/consReducer';
import prosReducer from './PropValues/prosReducer';

const rootReducer = combineReducers({
    pros: prosReducer,
    cons: consReducer,
  });
  
export default rootReducer;

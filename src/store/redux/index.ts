import { combineReducers } from "redux";
import starforce from './starforce';

const rootReducer = combineReducers({
  starforce,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
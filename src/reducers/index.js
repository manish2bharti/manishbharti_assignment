import { combineReducers } from "redux";
import authReducer from "./authReducer";
import personReducer from "./personReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  persons: personReducer,
});

export default rootReducer;

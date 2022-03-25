import { combineReducers } from "redux";
import { paginationReducer } from "../reducers/paginationReducer";
import uiReducer from "../reducers/uiReducer";
import userReducer from "../reducers/userReducer";
export default combineReducers({
  user: userReducer,
  pagination: paginationReducer,
  ui: uiReducer,
});

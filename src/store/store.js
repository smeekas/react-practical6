import userReducer from "./user/userReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { paginationReducer } from "./pagination/paginationReducer";
import uiReducer from "./ui/uiReducer";
const store = createStore(
  combineReducers({
    user: userReducer,
    pagination: paginationReducer,
    ui: uiReducer,
  }),
  applyMiddleware(thunk)
);
export default store;

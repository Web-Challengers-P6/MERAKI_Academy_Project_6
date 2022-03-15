import { createStore, combineReducers } from "redux";
import loginReducer from "./login";
import trips from "./trips";

const reducers = combineReducers({ loginReducer ,trips });

const store = createStore(reducers);

export default store;

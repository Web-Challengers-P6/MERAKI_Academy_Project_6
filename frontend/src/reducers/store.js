import { createStore, combineReducers } from "redux";
import login from "./trips/loginReducer/index";
const reducers = combineReducers({ login });

const store = createStore(reducers);

export default store;


import { legacy_createStore, combineReducers } from "redux";
import { reducer } from "./Reducers/Reducer";

const rootReducer = combineReducers({ reducer })
const store = legacy_createStore(rootReducer)

export { store }

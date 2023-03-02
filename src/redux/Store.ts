import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  AnyAction,
} from "redux";
import { Reducer } from "./Reducers/Reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { ThunkDispatch } from "redux-thunk/es/types";

const rootReducers = combineReducers({
  UserManager: Reducer,
});

const store = legacy_createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;

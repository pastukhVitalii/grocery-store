import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {GroceryReducer} from "./app-reducer";

const rootReducer = combineReducers({
  grocery: GroceryReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// @ts-ignore
window.store = store;

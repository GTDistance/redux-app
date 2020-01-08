import { applyMiddleware, createStore } from "redux";
import rootReduces from "../reduces/reduces";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from 'redux-promise'

const store = createStore(rootReduces,
  composeWithDevTools(applyMiddleware(thunk, promiseMiddleware))
);
export default store

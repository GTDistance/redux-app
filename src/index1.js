import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from "react-thunk";
import * as axios from "axios";

const counterReducer = function (state = { count: 1 }, action) {
  switch (action.type) {
    case 'COUNT_ADD':
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}
const postReducer = function (state = { title: '你好' }, action) {
  switch (action.type) {
    case 'LOAD_POSTS':
      return {
        ...state,
        title: 'lalal'
      }
    default:
      return state
  }
}
const rootReducers = combineReducers({ counterReducer, postReducer })
const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
console.info(store)
console.info(store.getState())
store.dispatch({
  type: 'COUNT_ADD',
  payload: { count: 3 }
})
console.info(store.getState())
axios.defaults.baseURL = 'http://localhost:3000'
const getPostList = () => {
  return axios({
    method: 'get',
    url: '/getList'
  })
}
// store.dispatch(async function (dispatch) {
//   const res = await getPostList()
//   console.info(res)
//   dispatch({
//     type: 'LOAD_POSTS',
//     payload: res.content
//   })
// })
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

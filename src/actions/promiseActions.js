import postList from "../post";
import postAction from "../actions/postAction";
import { createAction } from "redux-actions";

// const promiseAction = () => {
//   return new Promise((resolve, reject) => {
//     const result = postList()
//     result.then((data) => {
//       console.info(data)
//       resolve(postAction(data.data.content))
//     })
//   })
// }
const promiseAction = () => {
  return {
    type:'POST_LIST',
    payload:new Promise((resolve, reject) => {
      const result = postList()
      result.then((data) => {
        console.info(data)
        resolve(data.data.content)
      })
    })
  }
}
export default promiseAction

export const createPromiseAction =createAction('POST_LIST',() => {
  return new Promise((resolve, reject) => {
    postList().then((data) => {
      console.info(data)
      resolve(data.data.content)
    })
  })
})

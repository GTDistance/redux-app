import { handleActions } from "redux-actions";

// const postReducer = function (state = { postList: [] }, action) {
//   switch (action.type) {
//     case 'POST_LIST':
//       return {
//         ...state,
//         postList: action.payload
//       }
//     default :
//       return state
//   }
// }
// export default postReducer
const postReducer = handleActions({
  POST_LIST (state, action) {
    return {
      ...state,
      postList: action.payload
    }
  }
}, {
  postList: []
})

export default postReducer

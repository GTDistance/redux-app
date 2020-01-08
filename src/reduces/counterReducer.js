const counterReducer = function (state = { count: 1 }, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}
export default counterReducer

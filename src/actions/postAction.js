import postList from "../post";

const postAction = (payload) => ({
  type: 'POST_LIST',
  payload
})
export const postAsync =() => {
  return async dispatch =>{
    const result = await postList()
    console.info('result', result)
    dispatch(postAction(result.data.content))
  }
}
export default postAction

import * as axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000'
const postList = () => {
  return axios({
      url: '/getList'
    }
  )
}
export default postList

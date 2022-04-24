import axios from 'axios'

export const fetchUser = () :Promise<{name: string}> => {
  return axios.get('/user')
}

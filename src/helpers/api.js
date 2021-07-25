import axios from 'axios'

const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: { 'Accept': 'application/json'}
  })

export  default  {
  getIPosts: params => API.get('posts', { params }),
  createItem: item => API.post('posts', item),
  // etc.
}

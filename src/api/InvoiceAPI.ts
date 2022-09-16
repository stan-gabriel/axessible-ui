import axios from 'axios'

const api = axios.create({
  baseURL: '',
})

export const postInvoice = () => {
  api.post('url', {}, {}).then((res) => res.data)
}

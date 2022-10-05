import humps from 'humps'
import axios from 'axios'
import { IInvoiceInfo } from '../pages/InvoiceInfo/invoiceInfo.types'
import FileDownload from 'js-file-download'

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Token bfca858754a5f8c65c306d2c88a81f12a3da5eb1'
}

const api = axios.create({
  baseURL: '',
})

export const postAndDownloadInvoiceInfo = async (invoiceInfo: IInvoiceInfo) => {
  api.post('http://127.0.0.1:8000/invoice/', humps.decamelizeKeys(invoiceInfo), { headers: headers })
    .then((res) => {
      console.log(res.data, ' - api POST request - from request SERVICE')
      FileDownload(res.data, 'invoice.xml')
      console.log("success!", res)
    })
    .catch(err => {
      console.log("AXIOS ERROR: ", err)
    })
}

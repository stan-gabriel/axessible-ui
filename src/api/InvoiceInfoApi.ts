import axios from 'axios'
import { IInvoiceInfo } from '../Pages/InvoiceInfo/invoiceInfo.types'

const api = axios.create({
  baseURL: '',
})

export const postInvoiceInfo = async (invoiceInfo: IInvoiceInfo) => {
  api.post('www.google.ro', invoiceInfo, {}).then((res) => {
    console.log(res.data, ' - api POST request - from request SERVICE')
    return res.data
  })
}

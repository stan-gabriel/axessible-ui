import axios from 'axios'
import { IInvoiceInfo } from '../Pages/InvoiceInfo/invoiceInfo.types'

const api = axios.create({
  baseURL: '',
})

export const postInvoiceInfo = async (invoiceInfo: IInvoiceInfo) => {
  api.post('url', invoiceInfo, {}).then((res) => {
    console.log(res.data, ' - api POST request')
    return res.data
  })
}

export interface IInvoiceInfo {
  invoiceNumber: number | undefined
  invoiceTypeCode: string
  invoiceDate: string
  incoTermDeliveryCode: number | undefined
  invoiceCurrency: string
  allowanceTotalAmount: string
  chargeTotalAmount: string
  grandTotalAmount: string
  lineTotalAmount: string
  taxBasisTotalAmount: string
  taxTotalAmount: string
  exporterCargoXId: string
  exporterName: string
  exporterDunsNumber: string
  exporterCountryCode: string
  exporterVatId: number | undefined
  importerName: string
  importerCountryCode: string
  importerVatId: number | undefined
  invoiceItems: IInvoiceItem[]
}

export const InvoiceInfoDefaultValues: IInvoiceInfo = {
  invoiceNumber: undefined,
  invoiceTypeCode: '',
  invoiceDate: '',
  incoTermDeliveryCode: undefined,
  invoiceCurrency: '',
  allowanceTotalAmount: '20',
  chargeTotalAmount: '56',
  grandTotalAmount: '302',
  lineTotalAmount: '252',
  taxBasisTotalAmount: '288',
  taxTotalAmount: '14',
  exporterCargoXId: '',
  exporterName: '',
  exporterDunsNumber: '',
  exporterCountryCode: '',
  exporterVatId: undefined,
  importerName: '',
  importerCountryCode: '',
  importerVatId: undefined,
  invoiceItems: [],
}

export interface IInvoiceItem {
  itemNumber: string
  productType: string
  productDescription: string
  hsCode: string
  globalTradeItemNumber: string
  countryOfOrigin: string
  itemQuantity: string
  netWeight: string
  grossWeight: string
  amountIndicatorAllownessOrCharges: boolean
  amountIndicatorCalculationPercent: string
  amountIndicatorBasisAmount: string
  amountIndicatorActualAmount: string
  specifiedTradeSummationLineTotalAmount: string
  grossPriceChargeAmount: string
  netPriceChargeAmount: string
}

export const InvoiceItemDefaultValues = {
  itemNumber: '',
  productType: '',
  productDescription: '',
  hsCode: '',
  globalTradeItemNumber: '',
  countryOfOrigin: '',
  itemQuantity: '',
  netWeight: '',
  grossWeight: '',
  amountIndicatorAllownessOrCharges: false,
  amountIndicatorCalculationPercent: '',
  amountIndicatorBasisAmount: '',
  amountIndicatorActualAmount: '',
  specifiedTradeSummationLineTotalAmount: '',
  grossPriceChargeAmount: '',
  netPriceChargeAmount: '',
}

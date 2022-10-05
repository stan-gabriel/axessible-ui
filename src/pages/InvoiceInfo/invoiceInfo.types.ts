export interface IInvoiceInfo {
  invoiceNumber: number | undefined
  invoiceTypeCode: string
  invoiceDate: string
  incoTermDeliveryCode: number | undefined
  invoiceCurrency: string
  allowanceTotalAmount: string
  chargeTotalAmount: string
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
  allowanceTotalAmount: '',
  chargeTotalAmount: '',
  taxTotalAmount: '',
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
  amountIndicatorCalculationPercent: string
  amountIndicatorBasisAmount: string
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
  amountIndicatorCalculationPercent: '',
  amountIndicatorBasisAmount: '',
  grossPriceChargeAmount: '100',
  netPriceChargeAmount: '60',
}

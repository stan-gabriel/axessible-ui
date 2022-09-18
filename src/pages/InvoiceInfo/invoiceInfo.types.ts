export interface IInvoiceInfo {
  invoiceNumber: number | undefined
  invoiceTypeCode: string
  invoiceDate: string
  incoTerm: number | undefined
  currency: string
  exportCargoId: string
  exportName: string
  exportDunsNumber: string
  exportCountryCode: string
  exportVatId: number | undefined
  importName: string
  importCountryCode: string
  importVatId: number | undefined
  invoiceItems: IInvoiceItem[]
}

export const InvoiceInfoDefaultValues: IInvoiceInfo = {
  invoiceNumber: undefined,
  invoiceTypeCode: '',
  invoiceDate: '',
  incoTerm: undefined,
  currency: '',
  exportCargoId: '',
  exportName: '',
  exportDunsNumber: '',
  exportCountryCode: '',
  exportVatId: undefined,
  importName: '',
  importCountryCode: '',
  importVatId: undefined,
  invoiceItems: [],
}

export interface IInvoiceItem {
  itemIdentification: string
  productType: string
  productDescription: string
  hsCode: string
  gs1Code: string
  originCountry: string
  itemQuantity: string
  netWeight: string
}

export const InvoiceItemDefaultValues = {
  itemIdentification: '',
  productType: '',
  productDescription: '',
  hsCode: '',
  gs1Code: '',
  originCountry: '',
  itemQuantity: '',
  netWeight: '',
}

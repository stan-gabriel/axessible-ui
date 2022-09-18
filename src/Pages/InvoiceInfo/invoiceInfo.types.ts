export interface IInvoiceInfo {
  invoiceNumber: number | undefined
  invoiceTypeCode: string | undefined
  invoiceDate: string | undefined
  incoTerm: number | undefined
  currency: string | undefined
  exportCargoId: string | undefined
  exportName: string | undefined
  exportDunsNumber: string | undefined
  exportCountryCode: string | undefined
  exportVatId: number | undefined
  importName: string | undefined
  importCountryCode: string | undefined
  importVatId: number | undefined
  invoiceItems: IInvoiceItem[]
}

export const InvoiceInfoDefaultValues: IInvoiceInfo = {
  invoiceNumber: undefined,
  invoiceTypeCode: undefined,
  invoiceDate: undefined,
  incoTerm: undefined,
  currency: undefined,
  exportCargoId: undefined,
  exportName: undefined,
  exportDunsNumber: undefined,
  exportCountryCode: undefined,
  exportVatId: undefined,
  importName: undefined,
  importCountryCode: undefined,
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

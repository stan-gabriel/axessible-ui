export interface InvoiceInfo {
  invoiceNumber: number | null
  invoiceTypeCode: string
  invoiceDate: string
  incoTerm: number | null
  currency: string
  exportCargoId: string
  exportName: string
  exportCode: string
  exportCountryCode: string
  exportVatId: number | null
  importName: string
  importCountryCode: string
  importVarId: number | null
  invoiceItems: InvoiceItem[]
}

export const InvoiceInfoDefaultValues: InvoiceInfo = {
  invoiceNumber: null,
  invoiceTypeCode: '',
  invoiceDate: '',
  incoTerm: null,
  currency: '',
  exportCargoId: '',
  exportName: '',
  exportCode: '',
  exportCountryCode: '',
  exportVatId: null,
  importName: '',
  importCountryCode: '',
  importVarId: null,
  invoiceItems: [],
}

export interface InvoiceItem {
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

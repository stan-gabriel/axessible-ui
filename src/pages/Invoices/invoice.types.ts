export interface IInvoice {
  id: string
  invoice_number: string
  invoice_type_code: string
  invoice_date: string
  inco_term_delivery_code: string
  invoice_currency: string
  allowance_total_amount: string
  charge_total_amount: string
  tax_total_amount: string
  exporter_cargo_x_id: string
  exporter_name: string
  exporter_duns_number: string
  exporter_country_code: string
  exporter_vat_id: string
  importer_name: string
  importer_country_code: string
  importer_vat_id: string
  invoice_items: IInvoiceItem[]
}

export interface IInvoiceItem {
  item_number: string
  product_type: string
  product_description: string
  hs_code: string
  global_trade_item_number: string
  country_of_origin: string
  item_quantity: string
  net_weight: string
  gross_weight: string
  amount_indicator_calculation_percent: string
  amount_indicator_basis_amount: string
  gross_price_charge_amount: string
  net_price_charge_amount: string
}

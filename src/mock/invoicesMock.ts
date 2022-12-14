import { IInvoice } from '../pages/Invoices/invoice.types'

export const invoicesMockData: IInvoice[] = [
  {
    id: '1',
    invoice_number: '102030',
    invoice_type_code: '325',
    invoice_date: '20220120',
    inco_term_delivery_code: '2',
    invoice_currency: 'USD',
    allowance_total_amount: '20',
    charge_total_amount: '56',
    tax_total_amount: '288',
    exporter_cargo_x_id: '55fd08d4-e6fd-470b-9191-ef24f35a228c',
    exporter_name: 'Royal Logistics Services',
    exporter_duns_number: '98125746',
    exporter_country_code: 'MS',
    exporter_vat_id: '200216333',
    importer_name: 'Apple Egypt',
    importer_country_code: 'EG',
    importer_vat_id: '569863813',
    invoice_items: [
      {
        item_number: '1',
        product_type: 'Electronics',
        product_description: 'Mobile Phones',
        hs_code: '4403111234',
        global_trade_item_number: '8806090746079',
        country_of_origin: 'CN',
        item_quantity: '2',
        net_weight: '1',
        gross_weight: '2',
        amount_indicator_calculation_percent: '5',
        amount_indicator_basis_amount: '120',
        gross_price_charge_amount: '100',
        net_price_charge_amount: '60',
      },
    ],
  },

  {
    id: '2',
    invoice_number: '102031',
    invoice_type_code: '326',
    invoice_date: '20220120',
    inco_term_delivery_code: '2',
    invoice_currency: 'USD',
    allowance_total_amount: '20',
    charge_total_amount: '56',
    tax_total_amount: '288',
    exporter_cargo_x_id: '55fd08d4-e6fd-470b-9191-ef24f35a228c',
    exporter_name: 'Royal Logistics Services',
    exporter_duns_number: '98125746',
    exporter_country_code: 'MS',
    exporter_vat_id: '200216333',
    importer_name: 'Apple Egypt',
    importer_country_code: 'EG',
    importer_vat_id: '569863813',
    invoice_items: [
      {
        item_number: '1',
        product_type: 'Electronics',
        product_description: 'Mobile Phones',
        hs_code: '4403111234',
        global_trade_item_number: '8806090746079',
        country_of_origin: 'CN',
        item_quantity: '2',
        net_weight: '1',
        gross_weight: '2',
        amount_indicator_calculation_percent: '5',
        amount_indicator_basis_amount: '120',
        gross_price_charge_amount: '100',
        net_price_charge_amount: '60',
      },
    ],
  },
]

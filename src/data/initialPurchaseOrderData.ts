import { ProductLine, Invoice } from './types'
import { initialProductLine } from './initialData'
// export const initialProductLine: ProductLine = {
//   description: '',
//   quantity: '1',
//   rate: '0.00',
// }

export const initialPurchaseOrderData: Invoice = {
  logo: '',
  logoWidth: 100,
  title: 'PURCHASE ORDER',
  companyName: '',
  name: '',
  companyAddress: '',
  companyAddress2: '',
  companyCountry: 'United States',
  billTo: 'Vendor\'s Address:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'United States',
  invoiceTitleLabel: 'PO#',
  invoiceTitle: '',
  invoiceDateLabel: 'Order Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Delivery Date',
  invoiceDueDate: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: 'Brochure Design',
      quantity: '2',
      rate: '100.00',
    },
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sub Total',
  taxLabel: 'Purchase Tax (10%)',
  discountLabel: 'Discount (5%)',
  totalLabel: 'TOTAL',
  currency: '$',
  notesLabel: 'Notes',
  notes: 'It was great doing business with you.',
  termLabel: 'Terms & Conditions',
  term: 'Upon accepting this purchase order, you hereby agree to the terms & conditions.',
}

import { CSSProperties } from 'react'

export interface ProductLine {
  description: string
  quantity: string
  rate: string
}

export interface Base {
  logo: string
  logoWidth: number
  title: string
  companyName: string
  name: string
  companyAddress: string
  companyAddress2: string
  companyCountry: string

  billTo: string
  clientName: string
  clientAddress: string
  clientAddress2: string
  clientCountry: string

  invoiceTitleLabel: string
  invoiceTitle: string
  invoiceDateLabel: string
  invoiceDate: string
  invoiceDueDateLabel: string
  invoiceDueDate: string

  productLineDescription: string
  productLineQuantity: string
  productLineQuantityRate: string
  productLineQuantityAmount: string

  productLines: ProductLine[]

  subTotalLabel: string
  discountLabel: string
  taxLabel: string

  totalLabel: string
  currency: string

  notesLabel: string
  notes: string
  termLabel: string
  term: string
}

export type ExperienceItem = {
  position: string
  company: string
  start: string
  end: string
  workItems: string[]
}

export type InstitutionItem = {
  degreeName: string
  collegeName: string
  start: string
  end: string
}

export type ContactType = {
  phone: string
  email: string
  address: string
  website: string
}

export type Resume = {
  fullname: string
  designation: string
  description: string
  image: string
  imageSize: number
  institutions: InstitutionItem[]
  experience: ExperienceItem[]
  contact: ContactType
  skills: string[]
  titles: Section
}

export type Section = {
  [key: string]: string
}

export interface Invoice extends Base { }
export interface PurchaseOrder extends Base { }

export interface CSSClasses {
  [key: string]: CSSProperties
}

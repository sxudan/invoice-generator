import React, { useState } from 'react'
import InvoicePage from './components/InvoicePage'
import { Invoice } from './data/types'
import Download from './components/DownloadPDF'

function App() {
  const savedInvoice = window.localStorage.getItem('invoiceData')
  let data = null
  const [invoice, setInvoice] = useState<Invoice | null>(null)

  try {
    if (savedInvoice) {
      data = JSON.parse(savedInvoice)
    }
  } catch (_e) { }

  const onInvoiceUpdated = (invoice: Invoice) => {
    window.localStorage.setItem('invoiceData', JSON.stringify(invoice))
    setInvoice(invoice)
  }

  return (
    <div className="app">
      <h1 className="center fs-30">Invoice Generator</h1>
      <div style={{display: 'flex', gap: '24px'}}>
        <div style={{width: '200px'}}></div>
        <div style={{width: '700px'}}>
          <InvoicePage data={data} onChange={onInvoiceUpdated} />
        </div>
        { invoice && <Download data={invoice} />}
      </div>
    </div>
  )
}

export default App

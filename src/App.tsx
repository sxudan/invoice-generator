import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceGeneratorPage from './pages/invoice_generator';
import PurchaseOrderGeneratorPage from './pages/purchase_order_generator';

function App() {
  

  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>}/>
        <Route path='/generate-invoice' element={<InvoiceGeneratorPage />}/>
        <Route path='/generate-purchase-order' element={<PurchaseOrderGeneratorPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

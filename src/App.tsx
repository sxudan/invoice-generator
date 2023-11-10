import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceGeneratorPage from './features/invoice_generator';
import PurchaseOrderGeneratorPage from './features/purchase_order_generator';
import Landing_pages from './features/landing_pages';
import Navbar from './features/components/navbar';
import './css/main.css'

function App() {
  

  return (
    <div className='app'>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_pages/>}/>
        <Route path='/generate-invoice' element={<InvoiceGeneratorPage />}/>
        <Route path='/generate-purchase-order' element={<PurchaseOrderGeneratorPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceGeneratorPage from './pages/invoice_generator';
<<<<<<< HEAD
import Landing_pages from './pages/landing_pages';
import Navbar from './components/navbar';
=======
import PurchaseOrderGeneratorPage from './pages/purchase_order_generator';
>>>>>>> d9f8dbdd77ed16753eeb64c25b58ab75a9d7738e

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

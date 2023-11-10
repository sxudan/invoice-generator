import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceGeneratorPage from './pages/invoice_generator';
import Landing_pages from './pages/landing_pages';
import Navbar from './components/navbar';

function App() {
  

  return (
    <div className='app'>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_pages/>}/>
        <Route path='/generate-invoice' element={<InvoiceGeneratorPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

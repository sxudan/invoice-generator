import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceGeneratorPage from './pages/invoice_generator';

function App() {
  

  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>}/>
        <Route path='/generate-invoice' element={<InvoiceGeneratorPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

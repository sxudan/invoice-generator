import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceGeneratorPage from "./features/invoice_generator";
import PurchaseOrderGeneratorPage from "./features/purchase_order_generator";
import Landing_pages from "./pages/landing_pages";
import Navbar from "./components/Navbar";
import ResumeGeneratorPage from "./features/resume_generator";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing_pages />} />
          <Route path="/generate-invoice" element={<InvoiceGeneratorPage />} />
          <Route
            path="/generate-purchase-order"
            element={<PurchaseOrderGeneratorPage />}
          />
          <Route path="/generate-resume" element={<ResumeGeneratorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

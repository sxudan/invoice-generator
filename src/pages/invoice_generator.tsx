import InvoicePage from "../components/InvoicePage";
import { Invoice } from "../data/types";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import React, { useEffect, useState } from "react";
import Export from "../components/modal/export";
import { useSearchParams } from "react-router-dom";
import ReactPDF from "@react-pdf/renderer";
import env from "react-dotenv";
import { triggerDownload } from "../utils/download";
import ColorPalette from "../components/ColorPalette";
import '../css/main.css'


const InvoiceGeneratorPage = () => {
  const savedInvoice = window.localStorage.getItem("invoiceData");
  let data = null;
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [searchParam] = useSearchParams();

  try {
    if (savedInvoice) {
      data = JSON.parse(savedInvoice);
    }
  } catch (_e) {}

  const onInvoiceUpdated = (invoice: Invoice) => {
    window.localStorage.setItem("invoiceData", JSON.stringify(invoice));
    setInvoice(invoice);
  };

  
  /**
   * @param sessionId checkout session id
   * Validates whether the transaction is successful or not
   */
  function validate(sessionId: string) {
    const promise = new Promise((resolve, reject) => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${env.STRIPE_SK}`);

      fetch(`${env.STRIPE_API_URL}/checkout/sessions/${sessionId}`, {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      })
        .then((response) => response.json())
        .then((result) => {
          const status = result["payment_status"];
          if (status == "paid") {
            resolve(status);
          } else {
            reject("The payment was unsuccessful");
          }
        })
        .catch((error) => reject(error));
    });
    return promise;
  }

  useEffect(() => {
    const id = searchParam.get("download");
    if (id) {
      validate(id)
        .then(() => {
          const blob = ReactPDF.pdf(
            <InvoicePage data={invoice!} pdfMode={true} premium={true} />
          ).toBlob();
          blob.then((res) => {
            const url = URL.createObjectURL(res);
            if (url && url.length > 0) {
              console.log(url);
              triggerDownload(url, 'invoice.pdf')
              window.location.href = `${env.URL}/generate-invoice`
            }
          });
        })
        .catch((error) => alert(error));
    }
  }, [searchParam]);

  function createThemePalette() {
    return (
        <div>
            <h3>Choose Themes</h3>
            <ColorPalette onSelected={(color) => {
              console.log(color)
            }} />
        </div>
    )
  }

  return (
    <div className="invoice-main">
      <h1 className="center fs-30">Invoice Generator</h1>
      <div style={{ display: "flex", gap: "77px" }}>
        <div style={{ width: "100px" }}></div>
        <div style={{ width: "700px", minWidth: '700px' }}>
          <InvoicePage data={data} onChange={onInvoiceUpdated} />
        </div>
        {/* { invoice && <Download data={invoice} />} */}
        <div>
            <h3 className="center">Download Invoice</h3>
            <hr/>
            {createThemePalette()}
            <hr/>
        {invoice && (
          <Popup
            modal
            trigger={<button className="download-pdf">Download</button>}
            position="right center"
          >
            <Export invoice={invoice} />
          </Popup>
        )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default InvoiceGeneratorPage;

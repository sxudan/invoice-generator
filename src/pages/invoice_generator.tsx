import InvoicePage from "../components/InvoicePage";
import { Invoice } from "../data/types";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import React, { useEffect, useState } from "react";
import Export from "./export";
import { useSearchParams } from "react-router-dom";
import ReactPDF from "@react-pdf/renderer";
import env from "react-dotenv";
import { triggerDownload } from "../utils/download";

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
              window.location.href = 'http://localhost:3000/generate'
            }
          });
        })
        .catch((error) => alert(error));
    }
  }, [searchParam]);

  return (
    <>
      <h1 className="center fs-30">Invoice Generator</h1>
      <div style={{ display: "flex", gap: "24px" }}>
        <div style={{ width: "200px" }}></div>
        <div style={{ width: "700px" }}>
          <InvoicePage data={data} onChange={onInvoiceUpdated} />
        </div>
        {/* { invoice && <Download data={invoice} />} */}
        {invoice && (
          <Popup
            modal
            trigger={<button className="download-pdf">Download</button>}
            position="right center"
          >
            <Export invoice={invoice} />
          </Popup>
        )}
        <div></div>
      </div>
    </>
  );
};

export default InvoiceGeneratorPage;

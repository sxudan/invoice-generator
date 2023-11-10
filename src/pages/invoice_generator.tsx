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
import { Theme, theme1 } from "../styles/themes";


const InvoiceGeneratorPage = () => {
  
  // let data = null;
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [theme, setTheme] = useState<Theme>(theme1)
  const [searchParam] = useSearchParams();

  // try {
  //   if (savedInvoice) {
  //     data = JSON.parse(savedInvoice);
  //   }
  // } catch (_e) {}



  const onInvoiceUpdated = (invoice: Invoice,) => {
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

  function getSavedThemeData(): Theme | null {
    const savedTheme = window.localStorage.getItem("themeData");
    if(savedTheme) {
      return JSON.parse(savedTheme)
    } else {
      return null
    }
  }

  function getSavedInvoiceData() {
    const savedInvoice = window.localStorage.getItem("invoiceData");
   if(savedInvoice) {
    return JSON.parse(savedInvoice)
   }
   return null
  }

  function loadSaveItems() {
    const savedInvoice = getSavedInvoiceData()
    const savedTheme = getSavedThemeData()
    if(savedInvoice) {
      setInvoice(savedInvoice)
    }
    if(savedTheme) {
      setTheme(savedTheme)
    }
  }

  useEffect(() => {
    loadSaveItems()
  }, [])

  useEffect(() => {
    const id = searchParam.get("download");
    if (id) {
      const savedInvoice = window.localStorage.getItem("invoiceData");
      const savedTheme = window.localStorage.getItem("themeData");
      if(savedInvoice && savedTheme) {
        validate(id)
        .then(() => {
          const blob = ReactPDF.pdf(
            <InvoicePage data={JSON.parse(savedInvoice)} pdfMode={true} premium={true} theme={JSON.parse(savedTheme)}/>
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
      } else {
        alert('Download failed: No items found')
      }
    }
  }, [searchParam]);

  function createThemePalette() {
    return (
        <div>
            <h3 className="center">Choose Themes</h3>
            <ColorPalette value={theme} onSelected={(t) => {
              setTheme(t)
              window.localStorage.setItem("themeData", JSON.stringify(t))
            }} />
        </div>
    )
  }

  return (
    <div className="invoice-main">
      {/* <h1 className="center fs-30">Invoice Generator</h1> */}
      <div style={{ display: "flex", gap: "77px" }}>
        <div style={{ width: "100px" }}></div>
        <div style={{ width: "700px", minWidth: '700px' }}>
          <InvoicePage data={invoice!} onChange={onInvoiceUpdated} theme={theme}/>
        </div>
        {/* { invoice && <Download data={invoice} />} */}
        <div>
            <h1 className="center">Download Invoice</h1>
            <hr/>
            {createThemePalette()}
            <hr/>
        {invoice && (
          <Popup
            modal
            trigger={<button className="download-pdf mt-40">Download</button>}
            position="right center"
          >
            <Export invoice={invoice} theme={theme}/>
          </Popup>
        )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default InvoiceGeneratorPage;

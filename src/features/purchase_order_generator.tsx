import InvoicePage from "../creator-components/InvoicePage";
import { Invoice, PurchaseOrder } from "../data/types";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import React, { useCallback, useEffect, useState } from "react";
import Export from "../creator-components/modal/export";
import { useSearchParams } from "react-router-dom";
import ReactPDF from "@react-pdf/renderer";
import { triggerDownload, validate } from "../utils/download";
import ColorPalette from "../creator-components/ColorPalette";
import "../css/builder.css";
import { Theme, theme1 } from "../styles/themes";
import PurchaseOrderPage from "../creator-components/PurchaseOrderPage";
import Menu from "../components/Menu";

const PurchaseOrderGeneratorPage = () => {
  // let data = null;
  const [invoice, setInvoice] = useState<PurchaseOrder | null>(
    getSavedInvoiceData()
  );
  const [theme, setTheme] = useState<Theme>(theme1);
  const [searchParam] = useSearchParams();

  const onInvoiceUpdated = useCallback(
    (data: PurchaseOrder) => {
      window.localStorage.setItem("purchaseOrderData", JSON.stringify(data));
      setInvoice(data);
    },
    [invoice]
  );

  function createThemePalette() {
    return (
      <div>
        <h3 className="center fs-20 mt-20">Choose Themes</h3>
        <ColorPalette
          value={theme}
          onSelected={(t) => {
            setTheme(t);
            window.localStorage.setItem("themeData", JSON.stringify(t));
          }}
        />
      </div>
    );
  }

  function getSavedThemeData(): Theme | null {
    const savedTheme = window.localStorage.getItem("themeData");
    if (savedTheme) {
      return JSON.parse(savedTheme);
    } else {
      return null;
    }
  }

  function getSavedInvoiceData() {
    const savedInvoice = window.localStorage.getItem("purchaseOrderData");
    if (savedInvoice) {
      return JSON.parse(savedInvoice);
    }
    return null;
  }

  function loadSaveItems() {
    const savedInvoice = getSavedInvoiceData();
    const savedTheme = getSavedThemeData();
    if (savedInvoice) {
      setInvoice(savedInvoice);
    }
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }

  useEffect(() => {
    loadSaveItems();
  }, []);

  useEffect(() => {
    const id = searchParam.get("download");
    if (id) {
      const savedInvoice = window.localStorage.getItem("purchaseOrderData");
      const savedTheme = window.localStorage.getItem("themeData");
      if (savedInvoice && savedTheme) {
        validate(id)
          .then(() => {
            const blob = ReactPDF.pdf(
              <PurchaseOrderPage
                data={JSON.parse(savedInvoice)}
                pdfMode={true}
                premium={true}
                theme={JSON.parse(savedTheme)}
              />
            ).toBlob();
            blob.then((res) => {
              const url = URL.createObjectURL(res);
              if (url && url.length > 0) {
                console.log(url);
                triggerDownload(url, "invoice.pdf");
                window.location.href = `generate-purchase-order`;
              }
            });
          })
          .catch((error) => alert(error));
      } else {
        alert("Download failed: No items found");
      }
    }
  }, [searchParam]);

  return (
    <>
      <Menu/>
      <div className="invoice-main">
        {/* <h1 className="center fs-30">Invoice Generator</h1> */}
        <div style={{ display: "flex", gap: "77px" }}>
          <div style={{ width: "100px" }}></div>
          <div style={{ width: "700px", minWidth: "700px" }}>
            <PurchaseOrderPage
              data={invoice!}
              onChange={onInvoiceUpdated}
              theme={theme}
            />
          </div>
          {/* { invoice && <Download data={invoice} />} */}
          <div>
            <h1 className="center fs-30">Download Invoice</h1>
            <hr />
            {createThemePalette()}
            {invoice && (
              <Popup
                modal
                trigger={
                  <button className="download-pdf mt-40">Download</button>
                }
                position="right center"
              >
                <Export type="PurchaseOrder" po={invoice} theme={theme} />
              </Popup>
            )}
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseOrderGeneratorPage;

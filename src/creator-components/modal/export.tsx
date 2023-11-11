import InvoicePage from "../InvoicePage";
import { Base, Invoice, PurchaseOrder, Resume } from "../../data/types";
import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import React, { useState } from "react";
import { triggerDownload } from "../../utils/download";
import { Theme, theme1 } from "../../styles/themes";
import PurchaseOrderPage from "../PurchaseOrderPage";
import useCreateBuyLink from "../../hooks/useCreateBuyLink";
import ResumeBuilder from "../ResumeBuilder";

export type ExportType = 'Invoice' | 'PurchaseOrder' | 'Resume'

type ExportProps = {
  invoice?: Invoice
  po?: PurchaseOrder
  resume?: Resume
  theme?: Theme
  type: ExportType
};

const Export = ({ invoice, po, resume, type, theme = theme1 }: ExportProps) => {
  const [premium, setPremium] = useState(false);
  const buyButton = useCreateBuyLink(type)

  function getDoc() {
    switch(type) {
      case 'PurchaseOrder':
        return <PurchaseOrderPage data={po!} pdfMode={true} premium={false} theme={theme}/>
      case 'Resume':
        return <ResumeBuilder pdfMode={true} resumeData={resume} />
      default:
        return <InvoicePage data={invoice!} pdfMode={true} premium={false}  theme={theme}/>
    }
  }

  const onDownload = async () => {
    const blob = await ReactPDF.pdf(
      getDoc()
    ).toBlob();
    const url = URL.createObjectURL(blob);
    if (url && url.length > 0) {
      triggerDownload(url, "invoice.pdf");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Download your {type == 'Invoice' ? 'invoice' : 'purchase order'}</h1>

      <div>
        <input
          type="checkbox"
          checked={premium}
          value={"premium"}
          name="Download without watermark"
          onChange={() => {
            setPremium(!premium);
          }}
        />
        <label>Remove watermark (only $2.99)</label>
      </div>
      <PDFViewer showToolbar={false} style={{margin: '20px auto', display: 'flex', height: '200px'}}>
        {getDoc()}
      </PDFViewer>
      <div>
        {!premium && (
          <button
            style={styles.button}
            onClick={onDownload}
            className="download-pdf"
          >
            Download
          </button>
        )}
        {premium && (
          buyButton
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "16px",
  },
  button: {
    margin: "24px auto",
    display: "block",
  },
};

export default Export;

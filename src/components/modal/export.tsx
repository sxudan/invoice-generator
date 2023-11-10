import InvoicePage from "../InvoicePage";
import { Invoice } from "../../data/types";
import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import React, { useState } from "react";
import { triggerDownload } from "../../utils/download";
import { Theme, theme1 } from "../../styles/themes";

type ExportProps = {
  invoice?: Invoice;
  theme?: Theme
};

const Export = ({ invoice, theme = theme1 }: ExportProps) => {
  const [premium, setPremium] = useState(false);

  const onDownload = async () => {
    const blob = await ReactPDF.pdf(
      <InvoicePage data={invoice!} pdfMode={true} premium={false}  theme={theme}/>
    ).toBlob();
    const url = URL.createObjectURL(blob);
    if (url && url.length > 0) {
      triggerDownload(url, "invoice.pdf");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Download your invoice</h1>

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
        <InvoicePage data={invoice!} pdfMode={true} premium={false}  theme={theme} />
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
          <a
            style={styles.button}
            href="https://buy.stripe.com/test_aEUeVtdI0fFn6aIcMN"
            type="button"
            className="download-pdf"
          >
            Pay $2.99
          </a>
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

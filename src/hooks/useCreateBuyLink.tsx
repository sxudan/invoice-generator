import { useEffect, useState } from "react";
import { ExportType } from "../creator-components/modal/Export";
import React from "react";

const useCreateBuyLink = (type: ExportType) => {
  const PO = process.env.REACT_APP_STRIPE_PRODUCT_PO;
  const INV = process.env.REACT_APP_STRIPE_PRODUCT_INV;
  const RESUME = process.env.REACT_APP_STRIPE_PRODUCT_RESUME;

  const [url, setUrl] = useState(INV);

  useEffect(() => {
    if (type == "Invoice") {
      setUrl(INV);
    } else if (type == "PurchaseOrder") {
      setUrl(PO);
    } else {
      setUrl(RESUME)
    }
  }, [type]);

  return (
    <a style={styles.button} href={url} type="button" className="download-pdf">
      Pay $0.99
    </a>
  );
};

const styles = {
  button: {
    margin: "24px auto",
    display: "block",
  },
};

export default useCreateBuyLink;

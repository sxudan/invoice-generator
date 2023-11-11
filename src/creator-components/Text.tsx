import React, { FC } from "react";
import ReactPDF, { Text as PdfText } from "@react-pdf/renderer";
import compose from "../styles/compose";

interface Props {
  className?: string;
  pdfMode?: boolean;
  children?: string;
  style?: ReactPDF.Styles;
}

const Text: FC<Props> = ({ className, pdfMode, children, style }) => {
  return (
    <>
      {pdfMode ? (
        <PdfText
          style={{
            ...compose("span " + (className ? className : "")),
            ...style,
          }}
        >
          {children}
        </PdfText>
      ) : (
        <span className={"span " + (className ? className : "")} style={style}>
          {children}
        </span>
      )}
    </>
  );
};

export default Text;

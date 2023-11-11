import React, { FC, ReactNode } from "react";
import { Document as PdfDocument } from "@react-pdf/renderer";

interface Props {
  pdfMode?: boolean;
  children: ReactNode;
}

const Document: FC<Props> = ({ pdfMode, children }) => {
  return (
    <>
      {pdfMode ? (
        <PdfDocument author="Sudan Suwal">{children}</PdfDocument>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Document;

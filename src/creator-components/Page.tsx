import React, { FC, ReactNode } from "react";
import { Page as PdfPage } from "@react-pdf/renderer";
import compose from "../styles/compose";

type Varient = 'Default' | 'V1'
type VarientClass = 'page'

type Template = {
  [key in Varient]: {
    [key in VarientClass]: {}
  };
};

const templates: Template = {
  'Default': {
    'page': {
      fontFamily: "Nunito",
      fontSize: "13px",
      color: "#555",
      padding: "40px 35px",
      backgroundColor: '#fff',
    },
  },
  'V1': {
    'page': {
      fontFamily: "Nunito",
      fontSize: "13px",
      color: "#555",
      padding: "40px 0",
      backgroundColor: '#fff'
    },
  }
}

interface Props {
  className?: string;
  pdfMode?: boolean;
  children: ReactNode;
  varient?: Varient
}

const Page: FC<Props> = ({ className, pdfMode, children, varient = 'Default' }) => {
  return (
    <>
      {pdfMode ? (
        <PdfPage
          size="A4"
          style={{...compose("page " + (className ? className : "")), ...templates[varient].page}}
        >
          {children}
        </PdfPage>
      ) : (
        <div className={"page " + (className ? className : "")} style={templates[varient].page}>{children}</div>
      )}
    </>
  );
};

export default Page;

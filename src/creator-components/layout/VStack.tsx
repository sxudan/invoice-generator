import ReactPDF from "@react-pdf/renderer";
import View from "../View";
import React, { ReactNode } from "react";

type VStackProps = {
  spacing?: number;
  pdfMode?: boolean;
  children?: ReactNode;
  className?: string;
  mainAxisAlignment?: "start" | "center" | "end";
  crossAxisAlignment?: "start" | "center" | "end";
  style?: ReactPDF.Styles;
};

const VStack = ({
  spacing = 0,
  children,
  pdfMode,
  className,
  mainAxisAlignment = "start",
  crossAxisAlignment = "start",
  style,
}: VStackProps) => {
  // @ts-ignore
  return (
    <View
      className={className}
      style={{
        ...style,
        // @ts-ignore
        position: "relative",
        // @ts-ignore
        display: "flex",
        // @ts-ignore
        flexDirection: "column",
        // @ts-ignore
        gap: spacing,
        // @ts-ignore
        justifyContent: mainAxisAlignment,
        // @ts-ignore
        alignItems: crossAxisAlignment,
      }}
      pdfMode={pdfMode}
    >
      {children}
    </View>
  );
};

export default VStack;

import ReactPDF from "@react-pdf/renderer";
import View from "../View";
import React, { ReactNode } from "react";

type HStackProps = {
  spacing?: number;
  pdfMode?: boolean;
  children?: ReactNode;
  className?: string;
  mainAxisAlignment?: "start" | "center" | "end";
  crossAxisAlignment?: "start" | "center" | "end";
  style?: ReactPDF.Styles;
};

const HStack = ({
  spacing = 0,
  children,
  pdfMode,
  className,
  mainAxisAlignment = "start",
  crossAxisAlignment = "start",
  style,
}: HStackProps) => {
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
        flexDirection: "row",
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

export default HStack;

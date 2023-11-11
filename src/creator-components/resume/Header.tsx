import React, { useEffect, useState } from "react";
import View from "../View";
import EditableInput from "../EditableInput";
import HStack from "../layout/HStack";
import FullNameEditableInput from "../FullNameEditableInput";
import EditableFileImage from "../EditableFileImage";
import ReactPDF from "@react-pdf/renderer";

type HeaderProps = {
  pdfMode?: boolean;
  fullname: string;
  designation: string;
  image: string;
  size: number;
  onChange?: (
    fullname: string,
    designation: string,
    image: string,
    size: number,
  ) => void;
  styles?: ReactPDF.Styles;
  classname?: string;
};

const Header = ({
  pdfMode,
  fullname,
  designation,
  image,
  size,
  onChange,
  styles,
  classname,
}: HeaderProps) => {
  const [customName, setCustomName] = useState(fullname);
  const [customDesignation, setCustomDesignation] = useState(designation);
  const [customSize, setCustomSize] = useState(size);
  const [customImage, setCustomImage] = useState(image);

  useEffect(() => {
    if (onChange) {
      onChange(customName, customDesignation, customImage, size);
    }
  }, [customName, customDesignation, customImage, size]);

  return (
    <View pdfMode={pdfMode} style={styles} className={classname}>
      {/* @ts-ignore */}
      <HStack pdfMode={pdfMode} style={{ padding: "40px 40px" }}>
        {/* @ts-ignore */}
        <View pdfMode={pdfMode} style={{ width: "80%" }}>
          <View className="w-100" pdfMode={pdfMode}>
            {/* @ts-ignore */}
            <EditableInput
              pdfMode={pdfMode}
              value={fullname}
              onChange={(value) => {
                setCustomName(value);
              }}
              //  @ts-ignore
              className="fs-38"
              // @ts-ignore
              style={{ letterSpacing: "5px" }}
            />
          </View>
          <View className="w-100" pdfMode={pdfMode}>
            <EditableInput
              pdfMode={pdfMode}
              value={designation}
              onChange={(value) => {
                setCustomDesignation(value);
              }}
              className="fs-20"
            />
          </View>
        </View>
        <EditableFileImage
          className="logo"
          placeholder="Your Profile Image"
          value={customImage}
          width={customSize}
          pdfMode={pdfMode}
          onChangeImage={(value) => {
            setCustomImage(value);
          }}
          rounded
          // @ts-ignore
          styles={{
            // @ts-ignore
            position: "absolute",
            // @ts-ignore
            right: `${customSize / 2}px`,
            // @ts-ignore
            bottom: `-${customSize / 2}px`,
          }}
          onChangeWidth={(value) => {
            setCustomSize(value);
          }}
        />
      </HStack>
    </View>
  );
};

export default Header;

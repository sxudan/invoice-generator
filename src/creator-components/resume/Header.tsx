import React, { useEffect, useState } from "react";
import View from "../View";
import EditableInput from "../EditableInput";
import HStack from "../layout/HStack";
import FullNameEditableInput from "../FullNameEditableInput";
import EditableFileImage from "../EditableFileImage";

type HeaderProps = {
  pdfMode?: boolean;
  fullname: string;
  designation: string;
  image: string
  size: number
  onChange?: (fullname: string, designation: string, image: string, size: number) => void
};

const Header = ({ pdfMode, fullname, designation,image,size, onChange }: HeaderProps) => {

  const [customName, setCustomName] = useState(fullname)
  const [customDesignation, setCustomDesignation] = useState(designation)
  const [customSize, setCustomSize] = useState(size)
  const [customImage, setCustomImage] = useState(image)

  useEffect(() => {
    if(onChange) {
      onChange(customName, customDesignation, customImage, size)
    }
  }, [customName, customDesignation, customImage, size])

  return (
    <View pdfMode={pdfMode}>
      <HStack pdfMode={pdfMode}>
      {/* @ts-ignore */}
        <View pdfMode={pdfMode} style={{width: '80%'}}>
          <View className="w-100"  pdfMode={pdfMode}>
          {/* @ts-ignore */}
          <EditableInput pdfMode={pdfMode} value={fullname} onChange={(value) => {
            setCustomName(value)  
          }} 
          //  @ts-ignore
          className="fs-38" style={{letterSpacing: '5px'}}/>
        </View>
        <View className="w-100"  pdfMode={pdfMode}>
          <EditableInput pdfMode={pdfMode} value={designation} onChange={(value) => {
            setCustomDesignation(value)  
          }}  className="fs-20" />
        </View>
        </View>
        <EditableFileImage
              className="logo"
              placeholder="Your Profile Image"
              value={customImage}
              width={customSize}
              pdfMode={pdfMode}
              onChangeImage={(value) => {
                setCustomImage(value)
              }}
              onChangeWidth={(value) => {
                setCustomSize(value)
              }}
            />
      </HStack>
    </View>
  );
};

export default Header;

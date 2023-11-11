import React, { useEffect, useState } from "react";
import EditableInput from "../EditableInput";
import HStack from "../layout/HStack";
import ReactPDF, { Image, Text } from "@react-pdf/renderer";
import emailImage from "../../images/icons/email.png";
import locationImage from "../../images/icons/location.png";
import phoneImage from "../../images/icons/phone.png";
import websiteImage from "../../images/icons/website.png";
import compose from "../../styles/compose";
import VStack from "../layout/VStack";
import Spacer from "../layout/Spacer";
import { ContactType } from "../../data/types";

type ContactProps = {
  pdfMode?: boolean;
  onChange?: (data: ContactType) => void;
  className?: string;
  data: ContactType;
  style?: ReactPDF.Styles;
};

const Img = ({ pdfMode, src }: any) => {
  return (
    // @ts-ignore
    pdfMode ? (
      <Image
        style={{ width: "16px", height: "16px", maxWidth: "16px" }}
        src={src}
      />
    ) : (
      <img width={16} className="image__img" src={src} />
    )
    // <Image src={src}/>
  );
};

const Contact = ({
  pdfMode,
  onChange,
  className,
  style,
  data,
}: ContactProps) => {
  const [customContact, setCustomContact] = useState(data);

  useEffect(() => {
    if (onChange) {
      setCustomContact(customContact);
    }
  }, [customContact]);

  return (
    <VStack pdfMode={pdfMode} spacing={4} className={className} style={style}>
      <Spacer pdfMode={pdfMode} h="8px" />
      {/* @ts-ignore */}
      <HStack
        pdfMode={pdfMode}
        crossAxisAlignment="center"
        className="w-100"
        spacing={8}
      >
        <Img pdfMode={pdfMode} src={emailImage} />
        <EditableInput
          pdfMode={pdfMode}
          value={customContact.email}
          onChange={(value) => {
            setCustomContact({
              ...customContact,
              email: value,
            });
          }}
        />
      </HStack>
      <HStack
        pdfMode={pdfMode}
        crossAxisAlignment="center"
        className="w-100"
        spacing={8}
      >
        <Img pdfMode={pdfMode} src={phoneImage} />
        <EditableInput
          pdfMode={pdfMode}
          value={customContact.phone}
          onChange={(value) => {
            setCustomContact({
              ...customContact,
              phone: value,
            });
          }}
        />
      </HStack>
      <HStack
        pdfMode={pdfMode}
        crossAxisAlignment="center"
        className="w-100"
        spacing={8}
      >
        <Img pdfMode={pdfMode} src={locationImage} />
        <EditableInput
          pdfMode={pdfMode}
          value={customContact.address}
          onChange={(value) => {
            setCustomContact({
              ...customContact,
              address: value,
            });
          }}
        />
      </HStack>
      <HStack
        pdfMode={pdfMode}
        crossAxisAlignment="center"
        className="w-100"
        spacing={8}
      >
        <Img pdfMode={pdfMode} src={websiteImage} />
        <EditableInput
          pdfMode={pdfMode}
          value={customContact.website}
          onChange={(value) => {
            setCustomContact({
              ...customContact,
              website: value,
            });
          }}
        />
      </HStack>
    </VStack>
  );
};

export default Contact;

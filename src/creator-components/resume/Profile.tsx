import React, { useEffect, useState } from "react";
import View from "../View";
import EditableInput from "../EditableInput";
import EditableTextarea from "../EditableTextarea";
import Spacer from "../layout/Spacer";

type ProfileProps = {
  pdfMode?: boolean;
  onChange?: (title: string, text: string) => void;
  title: string;
  description: string;
  className: string;
};

const Profile = ({
  pdfMode,
  onChange,
  className,
  title,
  description,
}: ProfileProps) => {
  const [customTitle, setCustomTitle] = useState(title);
  const [desc, setDesc] = useState(description);

  useEffect(() => {
    if (onChange) {
      onChange(title, desc);
    }
  }, [title, desc]);

  return (
    <View pdfMode={pdfMode} className={className}>
      <EditableInput
        pdfMode={pdfMode}
        className="fs-20 bold letter-spacing"
        value={customTitle}
        onChange={(value) => {
          setCustomTitle(value);
        }}
      />
      <Spacer pdfMode={pdfMode} h="8px" />
      <EditableTextarea
        pdfMode={pdfMode}
        value={description}
        onChange={(value) => {
          setDesc(value);
        }}
      />
    </View>
  );
};

export default Profile;

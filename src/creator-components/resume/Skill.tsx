import React, { useEffect, useState } from "react";
import View from "../View";
import EditableInput from "../EditableInput";
import HStack from "../layout/HStack";
import FullNameEditableInput from "../FullNameEditableInput";
import EditableFileImage from "../EditableFileImage";
import Text from "../Text";
import EditableTextarea from "../EditableTextarea";
import List from "../layout/List";
import Spacer from "../layout/Spacer";

type ProfileProps = {
  pdfMode?: boolean;
  onChange?: (title: string, skills: string[]) => void;
  className?: string
  title: string
  data: string[]
};

const Skill = ({ pdfMode, onChange,title, className, data }: ProfileProps) => {
  
  const [customTitle, setCustomTitle] = useState(title)
  const [skills, setSkills] = useState(data)

  useEffect(() => {
    if(onChange) {
      onChange(title, skills)
    }
  }, [skills, customTitle])

  return (
    <View pdfMode={pdfMode} className={className}>
        <EditableInput pdfMode={pdfMode} className="fs-20 bold letter-spacing" value={customTitle} onChange={(value) => {
          setCustomTitle(value)
        }}/>
        <Spacer pdfMode={pdfMode} h="8px"/>
        <List pdfMode={pdfMode} items={data} title={title} onChange={(v) => {
          setSkills(v)
        }}/>
    </View>
  );
};

export default Skill;

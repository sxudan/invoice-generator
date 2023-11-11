import React, { useEffect, useState } from "react";
import View from "../View";
import EditableInput from "../EditableInput";
import HStack from "../layout/HStack";
import FullNameEditableInput from "../FullNameEditableInput";
import EditableFileImage from "../EditableFileImage";
import Text from "../Text";
import EditableTextarea from "../EditableTextarea";
import Spacer from "../layout/Spacer";
import { InstitutionItem } from "../../data/types";



type InstitutionProps = {
  pdfMode?: boolean;
  onChange?: (institutions: InstitutionItem[]) => void;
  className?: string
  institutions: InstitutionItem[]
};

type EducationProps = {
  pdfMode?: boolean;
  onChange?: (title: string, institutions: InstitutionItem[]) => void;
  className?: string
  institutions: InstitutionItem[]
  title: string
};

const Institution = ({ pdfMode, onChange, className, institutions }: InstitutionProps) => {
  const [customInstitution, setCustomInstitution] = useState(institutions)

  useEffect(() => {
    if(onChange) {
      onChange(customInstitution)
    }
  }, [customInstitution])

  useEffect(() => {
    setCustomInstitution(institutions)
  }, [institutions])

  const handleRemove = (index: number) => {
    const newArray = [...customInstitution]
    newArray.splice(index, 1)
    setCustomInstitution(newArray)
  }

  return (
    <View pdfMode={pdfMode} className={className}>
        {
          
          customInstitution.map((institution, index) => (
              <View pdfMode={pdfMode} key={index}>
                {!pdfMode && (
                        <button
                        className="link row__remove mb-10"
                        aria-label="Remove Row"
                        title="Remove Row"
                        onClick={() => handleRemove(index)}
                        >
                        <span className="icon icon-remove bg-red"></span>
                        </button>
                    )}
                <EditableTextarea placeholder="Master of Information Technology" className="bold" pdfMode={pdfMode} value={institution.degreeName} onChange={(value) => {
                  const insts = Array.from(customInstitution)
                  insts[index].degreeName = value
                  setCustomInstitution(insts)
                }}/>
                <EditableTextarea placeholder="Harvard University" pdfMode={pdfMode} value={institution.collegeName} onChange={(value) => {
                  const insts = Array.from(customInstitution)
                  insts[index].collegeName = value
                  setCustomInstitution(insts)
                }}/>
                <HStack>
                  {/* @ts-ignore */}
                  <EditableTextarea placeholder="Start Date" className="resize-both" pdfMode={pdfMode} value={institution.start} onChange={(value) => {
                  const insts = Array.from(customInstitution)
                  insts[index].start = value
                  setCustomInstitution(insts)
                }}/>
                  {/* <View pdfMode={pdfMode} className="w-40"> */}
                  {/* @ts-ignore */}
                  <Text pdfMode={pdfMode} style={{width: '3ch'}} >-</Text>
                  {/* @ts-ignore */}
                  <EditableTextarea placeholder="End Date" className="resize-both" pdfMode={pdfMode} value={institution.end} onChange={(value) => {
                  const insts = Array.from(customInstitution)
                  insts[index].end = value
                  setCustomInstitution(insts)
                }}/>
                </HStack>
                
                <Spacer pdfMode={pdfMode} h="16px" />
                
              </View>
          ))
          
        }
        
    </View>
  );
};

const Education = ({ pdfMode, onChange, title,  className, institutions }: EducationProps) => {
  const [customInstitution, setCustomInstitution] = useState(institutions)
  const [customTitle, setCustomTitle] = useState(title)

  useEffect(() => {
    if(onChange) {
      onChange(customTitle, customInstitution)
    }
  }, [customTitle, customInstitution])

  const handleAdd = () => {
    setCustomInstitution([...customInstitution, {
      collegeName: '',
      degreeName: '',
      start: '',
      end: ''
    }])
  }

  return (
    <View pdfMode={pdfMode} className={className}>
        <EditableInput pdfMode={pdfMode} className="fs-20 bold letter-spacing" value={customTitle} onChange={(value) => {
          setCustomTitle(value)
        }}/>
        <Spacer pdfMode={pdfMode} h="8px"/>
        <Institution pdfMode={pdfMode} institutions={customInstitution} onChange={(data) => {
          setCustomInstitution(data)
        }}/>
        {!pdfMode && (
              <button className="link mt-10" onClick={handleAdd}>
                <span className="icon icon-add bg-green mr-10 "></span>
                Add {title.toLowerCase()}
              </button>
        )}
    </View>
  );
};

export default Education;

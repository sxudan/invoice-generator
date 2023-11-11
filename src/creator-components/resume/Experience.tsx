import React, { useEffect, useState } from "react";
import View from "../View";
import EditableInput from "../EditableInput";
import HStack from "../layout/HStack";
import FullNameEditableInput from "../FullNameEditableInput";
import EditableFileImage from "../EditableFileImage";
import Text from "../Text";
import EditableTextarea from "../EditableTextarea";
import Spacer from "../layout/Spacer";
import List from "../layout/List";
import { ExperienceItem } from "../../data/types";


type CompanyProps = {
  pdfMode?: boolean;
  onChange?: (experiences: ExperienceItem[]) => void;
  className?: string
  experiences: ExperienceItem[]
  enableStepper?: boolean
};

type ExperienceProps = {
  pdfMode?: boolean;
  onChange?: (title: string, data: ExperienceItem[]) => void;
  className?: string
  title: string
  experiences: ExperienceItem[]
  enableStepper?: boolean
};

const Company = ({ pdfMode, onChange, className, experiences, enableStepper }: CompanyProps) => {

  const [customExperiences, setCustomExperiences] = useState(experiences)

  useEffect(() => {
    if(onChange) {
      onChange(customExperiences)
    }
  }, [customExperiences])

  useEffect(() => {
    setCustomExperiences(experiences)
  }, [experiences])

  const handleRemove = (index: number) => {
    const newArray = [...customExperiences]
    newArray.splice(index, 1)
    setCustomExperiences(newArray)
  }

  return (
    // @ts-ignore
    <View pdfMode={pdfMode} className={className} >
      
        {
          customExperiences.map((experience, index) => (
              <View pdfMode={pdfMode} className={enableStepper? "stepper" : ''}>
                {
                  enableStepper &&  <View pdfMode={pdfMode} className="stepper-thumb">
                  
                  </View>
                }
                
                <HStack crossAxisAlignment="center">
                  <EditableTextarea placeholder="Software Developer" className="bold fs-16" pdfMode={pdfMode} value={experience.position} onChange={(value)=> {
                    const insts = Array.from(customExperiences)
                    insts[index].position = value
                    setCustomExperiences(insts)
                  }}/>
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
                </HStack>
                <EditableTextarea placeholder="Microsoft" pdfMode={pdfMode} value={experience.company} onChange={(value)=> {
                  const insts = Array.from(customExperiences)
                  insts[index].company = value
                  setCustomExperiences(insts)
                }}/>
                <HStack>
                  {/* @ts-ignore */}
                  <EditableTextarea placeholder="Start Date" className="resize-both" pdfMode={pdfMode} value={experience.start}  onChange={(value)=> {
                  const insts = Array.from(customExperiences)
                  insts[index].start = value
                  setCustomExperiences(insts)
                }}/>
                  {/* <View pdfMode={pdfMode} className="w-40"> */}
                  {/* @ts-ignore */}
                  <Text pdfMode={pdfMode} style={{width: '3ch'}} >-</Text>
                  {/* @ts-ignore */}
                  <EditableTextarea placeholder="End Date" className="resize-both" pdfMode={pdfMode} value={experience.end}  onChange={(value)=> {
                  const insts = Array.from(customExperiences)
                  insts[index].end = value
                  setCustomExperiences(insts)
                }}/>
                
                </HStack>
                <Spacer pdfMode={pdfMode} h="16px" />
                <List pdfMode={pdfMode} items={experience.workItems} title="item"  onChange={(value)=> {
                  const insts = Array.from(customExperiences)
                  insts[index].workItems = value
                  setCustomExperiences(insts)
                }} />
                <Spacer pdfMode={pdfMode} h="16px" />
              </View>
          ))
        }
        
    </View>
  );
};

const Experience = ({ pdfMode, onChange,title, className, experiences, enableStepper }: ExperienceProps) => {
  const [customTitle, setCustomTitle] = useState(title)
  const [customExperiences, setCustomExperiences] = useState(experiences)

  useEffect(() => {
    if(onChange) {
      onChange(customTitle, customExperiences)
    }
  }, [customExperiences, customTitle])

  const handleAdd = () => {
    setCustomExperiences(customExperiences.concat({
      position: '',
      company: '',
      start: '',
      end: '',
      workItems: ['Developed AI engine']
    }))
  }

  return (
    <View pdfMode={pdfMode} className={className}>
        <EditableInput pdfMode={pdfMode} className="fs-20 bold letter-spacing" value={customTitle} onChange={(value) => {
          setCustomTitle(value)
        }}/>
        <Spacer pdfMode={pdfMode} h="8px"/>
        <Company enableStepper={enableStepper} pdfMode={pdfMode} experiences={customExperiences} onChange={(value) => {
          setCustomExperiences(value)
        }}/>
        {!pdfMode && (
              <button className="link mt-10" onClick={handleAdd}>
                <span className="icon icon-add bg-green mr-10 "></span>
                Add {customTitle.toLowerCase()}
              </button>
        )}
    </View>
  );
};

export default Experience;

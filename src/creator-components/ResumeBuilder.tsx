import React, { useEffect, useState } from "react";
import Document from "./Document";
import Page from "./Page";
import HStack from "./layout/HStack";
import Header from "./resume/Header";
import { Resume } from "../data/types";
import Profile from "./resume/Profile";
import Skill from "./resume/Skill";
import Spacer from "./layout/Spacer";
import Education from "./resume/Education";
import Experience from "./resume/Experience";
import View from "./View";
import Contact from "./resume/Contact";
import initialResumeData from "../data/initialResumeData";
import Text from "./Text";

type ResumeBuilderProps = {
    pdfMode?: boolean
    resumeData?: Resume
    onChange?: (data: Resume) => void
    premium?: boolean
}

const ResumeBuilder = ({pdfMode, resumeData, onChange, premium}: ResumeBuilderProps) => {

    const [resume, setResume] = useState<Resume>(resumeData ?? initialResumeData)

    useEffect(() => {
        if (onChange) {
          onChange(resume)
        }
      }, [onChange, resume])

    useEffect(() => {
        if(resumeData) {
            setResume(resumeData)
        }
    }, [resumeData])

    return (
        <Document pdfMode={pdfMode}>
            <Page className="invoice-wrapper" pdfMode={pdfMode}> 
                <Header pdfMode={pdfMode} size={resume.imageSize} fullname={resume.fullname} designation={resume.designation} image={resume.image} onChange={(name, designation, image, size) => {
                    setResume({
                        ...resume,
                        fullname: name,
                        designation: designation,
                        image: image ?? '',
                        imageSize: size
                    })
                }}
                />

                <Spacer pdfMode={pdfMode} h="32px"/>

                <HStack pdfMode={pdfMode} spacing={24}>
                    {/* @ts-ignore */}
                    <Contact data={resume.contact} className="w-40" pdfMode={pdfMode} style={{flex: 1}} onChange={(contact) => {
                        setResume({
                            ...resume,
                            contact: contact
                        })
                    }}/>
                    <Profile title={resume.titles['profile']} description={resume.description} pdfMode={pdfMode} className="w-60 border-left" onChange={(title, desc) => {
                        setResume({
                            ...resume,
                            description: desc,
                            titles: {
                                ...resume.titles,
                                profile: title
                            }
                        })
                    }}/>
                </HStack>
                
                {/* <Spacer pdfMode={pdfMode} h="32px"/> */}

                <HStack pdfMode={pdfMode}>
                    {/* @ts-ignore */}
                    <View pdfMode={pdfMode} className="w-40" style={{flex: 1}}>
                        <Skill pdfMode={pdfMode} data={resume.skills} title={resume.titles['skills']} onChange={(title, skills) => {
                            setResume({
                                ...resume,
                                skills: skills,
                                titles: {
                                    ...resume.titles,
                                    skills: title
                                }
                            })
                        }}/>
                        <Spacer pdfMode={pdfMode} h="32px"/>
                        <Education pdfMode={pdfMode} institutions={resume.institutions} title={resume.titles['education']} className="" onChange={(title, data) => {
                            setResume({
                                ...resume,
                                institutions: data,
                                titles: {
                                    ...resume.titles,
                                    education: title
                                }
                            })
                        }}/>
                    </View>
                    <Experience pdfMode={pdfMode} title={resume.titles['experience']} className="w-60 border-left" experiences={resume.experience} onChange={(title, data) => {
                        setResume({
                            ...resume,
                            experience: data,
                            titles: {
                                ...resume.titles,
                                experience: title
                            }
                        })
                    }}/>
                </HStack>
                {
          !premium && <View className='watermark center mt-40' pdfMode={pdfMode}>
                <Text pdfMode={pdfMode}>Powered by InvoiceXYZ</Text>
            </View>
            }
            </Page>
      </Document>
    )
}

export default ResumeBuilder
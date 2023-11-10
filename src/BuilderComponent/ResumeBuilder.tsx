import React, { useState } from "react";
import Document from "./Document";
import Page from "./Page";
import Text from "./Text";
import Spacer from "./layout/Spacer";
import HStack from "./layout/HStack";
import Header from "./resume/Header";
import EditableInput from "./EditableInput";

type ResumeBuilderProps = {
    pdfMode?: boolean
}

const ResumeBuilder = ({pdfMode}: ResumeBuilderProps) => {

    const [resume, setResume] = useState<any>({
        name: '',
        designation: ''
    })

    return (
        <Document pdfMode={pdfMode}>
            <Page className="invoice-wrapper" pdfMode={pdfMode}> 
                <Header name={resume.name} designation={resume.designation} onDesignationChange={(designation) => {
                    setResume({
                        ...resume,
                        designation: designation
                    })
                }} onNameChange={(name) => {
                    setResume({
                        ...resume,
                        name: name
                    })
                }}/>
            </Page>
      </Document>
    )
}

export default ResumeBuilder
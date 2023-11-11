import React, { useEffect, useState } from "react"
import ResumeBuilder from "../creator-components/ResumeBuilder"
import HStack from "../creator-components/layout/HStack"
import Popup from "reactjs-popup"
import Export from "../creator-components/modal/export"
import { Resume } from "../data/types"

const ResumeGeneratorPage = () => {
    const [resume, setResume] = useState<Resume | null>(loadResume())

    function loadResume(): Resume | null {
        const data = window.localStorage.getItem('resumeData')
        if(data) {
            return JSON.parse(data)
        }
        return null
    }

    return (
        
        <div className="invoice-main">
            <HStack spacing={77}>
                <div style={{ width: "100px" }}></div>
                <div style={{ width: "800px", minWidth: '800px' }}>
                <ResumeBuilder onChange={(resume) => {
                    setResume(resume)
                    window.localStorage.setItem('resumeData', JSON.stringify(resume))
                }}/>
                </div>
                <div style={{}}>
                    <h1 className="center fs-30">Download Resume</h1>
                    <hr/>
                    {/* {createThemePalette()} */}
                    {/* <hr/> */}
                {(
                <Popup
                    modal
                    trigger={<button className="download-pdf mt-40">Download</button>}
                    position="right center"
                >
                    <Export type="Resume" resume={resume!}/>
                </Popup>
                )}
                </div>
            </HStack>
        </div>
    )
}

export default ResumeGeneratorPage
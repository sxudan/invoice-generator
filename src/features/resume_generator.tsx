import React, { useEffect, useState } from "react";
import ResumeBuilder from "../creator-components/ResumeBuilder";
import HStack from "../creator-components/layout/HStack";
import Popup from "reactjs-popup";
import Export from "../creator-components/modal/Export";
import { Resume } from "../data/types";
import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import { useSearchParams } from "react-router-dom";
import { triggerDownload, validate } from "../utils/download";

const ResumeGeneratorPage = () => {
  const [resume, setResume] = useState<Resume | undefined>(loadResume());
  const [searchParam] = useSearchParams();

  function loadResume(): Resume | undefined {
    console.log('Load resume data')
    const data = window.localStorage.getItem("resumeData");
    if (data) {
      return JSON.parse(data);
    }
    return undefined;
  }

  useEffect(() => {
    const id = searchParam.get("download");
    if (id) {
      const savedResume = window.localStorage.getItem("resumeData");
      if (savedResume) {
        validate(id)
          .then(() => {
            const blob = ReactPDF.pdf(
              <ResumeBuilder
                resumeData={JSON.parse(savedResume)}
                pdfMode={true}
                premium={true}
                
              />,
            ).toBlob();
            blob.then((res) => {
              const url = URL.createObjectURL(res);
              if (url && url.length > 0) {
                console.log(url);
                triggerDownload(url, "Resume_premium.pdf");
                window.location.href = `generate-resume`;
              }
            });
          })
          .catch((error) => alert(error));
      } else {
        alert("Download failed: No items found");
      }
    }
  }, [searchParam]);

  return (
    <div className="invoice-main">
      <HStack spacing={77}>
        <div style={{ width: "100px" }}></div>
        <div style={{ width: "800px", minWidth: "800px" }}>
          <ResumeBuilder
            resumeData={resume}
            onChange={(resume) => {
              setResume(resume);
              window.localStorage.setItem("resumeData", JSON.stringify(resume));
              console.log('setting data')
            }}
          />
        </div>
        <div style={{}}>
          <h1 className="center fs-30">Download Resume</h1>
          {/* <hr /> */}
          {/* {createThemePalette()} */}

          <hr />
          {
            <Popup
              modal
              trigger={<button className="download-pdf mt-40">Download</button>}
              position="right center"
            >
              <Export type="Resume" resume={resume!} />
            </Popup>
          }
        </div>
      </HStack>
    </div>
  );
};

export default ResumeGeneratorPage;

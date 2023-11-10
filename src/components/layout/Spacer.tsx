import View from "../View"
import React from "react"

type SpacerProps = {
    w?: string
    h?: string
    pdfMode?: boolean
}

const Spacer = ({w = '0', h = '0', pdfMode}: SpacerProps) => {
    // @ts-ignore
    return <View style={{width: w, height: h}} pdfMode={pdfMode}><p></p></View>
}

export default Spacer
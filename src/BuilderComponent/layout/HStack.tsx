import View from "../View"
import React, { ReactNode } from "react"

type HStackProps = {
    spacing?: number
    pdfMode?: boolean
    children?: ReactNode
    mainAxisAlignment?: 'start' | 'center' | 'end'
    crossAxisAlignment?: 'start' | 'center' | 'end'
}

const HStack = ({spacing = 0, children, pdfMode, mainAxisAlignment = 'start', crossAxisAlignment = 'start'}: HStackProps) => {
    // @ts-ignore
    return <View style={{display: 'flex', flexDirection: 'row', gap: spacing, justifyContent: mainAxisAlignment, alignItems: crossAxisAlignment}} pdfMode={pdfMode}>{children}</View>
}

export default HStack
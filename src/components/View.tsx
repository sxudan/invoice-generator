import React, { FC, ReactNode } from 'react'
import ReactPDF, { View as PdfView } from '@react-pdf/renderer'
import compose from '../styles/compose'

interface Props {
  className?: string
  pdfMode?: boolean
  children: ReactNode
  style?: ReactPDF.Styles
}

const View: FC<Props> = ({ className, pdfMode, children, style }) => {
  return (
    <>
      {pdfMode ? (
        <PdfView style={[compose('view ' + (className ? className : '')), style ?? {}]}>{children}</PdfView>
      ) : (
        <div className={'view ' + (className ? className : '')} style={style}>{children}</div>
      )}
    </>
  )
}

export default View

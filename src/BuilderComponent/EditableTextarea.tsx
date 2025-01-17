import React, { FC } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import ReactPDF, { Text } from '@react-pdf/renderer'
import compose from '../styles/compose'

interface Props {
  className?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  pdfMode?: boolean
  rows?: number
  style?: ReactPDF.Styles
}

const EditableTextarea: FC<Props> = ({
  className,
  placeholder,
  value,
  onChange,
  pdfMode,
  rows,
  style
}) => {
  return (
    <>
      {pdfMode ? (
        <Text style={{...compose('span ' + (className ? className : '')), ...style}}>{value}</Text>
      ) : (
        <TextareaAutosize
          minRows={rows || 1}
          className={'input ' + (className ? className : '')}
          style={style}
          placeholder={placeholder || ''}
          value={value || ''}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        />
      )}
    </>
  )
}

export default EditableTextarea

import React, { FC } from 'react'
import ReactPDF, { Text } from '@react-pdf/renderer'
import compose from '../styles/compose'

interface Props {
  className?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  pdfMode?: boolean
  style?: ReactPDF.Styles
}

const EditableInput: FC<Props> = ({ className, placeholder, value, onChange, pdfMode, style }) => {
  return (
    <>
      {pdfMode ? (
        <Text style={{...compose('span ' + (className ? className : '')), ...style}}>{value}</Text>
      ) : (
        <input
          type="text"
          className={'input ' + (className ? className : '')}
          placeholder={placeholder || ''}
          value={value || ''}
          style={style}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        />
      )}
    </>
  )
}

export default EditableInput

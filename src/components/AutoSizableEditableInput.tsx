import React, { FC, useState } from 'react'
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

const AutoSizableEditableInput: FC<Props> = ({ className, placeholder, value, onChange, pdfMode, style }) => {
    const [w, setW] = useState(value?.length ?? 0)

  return (
    <>
      {pdfMode ? (
        <Text style={{...compose('span ' + (className ? className : '')), ...style, width: `${w}ch`}}>{value}</Text>
      ) : (
        <input
          type="text"
          className={'input ' + (className ? className : '')}
          placeholder={placeholder || ''}
          value={value || ''}
          style={{...style,paddingRight: '0', minWidth: '100px', width: `calc(${w}ch + 12px)`}}
          onChange={onChange ? (e) => {
            setW(e.target.value.length + 1)
            onChange(e.target.value)
          } : undefined}
        />
      )}
    </>
  )
}

export default AutoSizableEditableInput

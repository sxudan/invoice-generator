import React, { FC, ReactNode, useState } from 'react'
import ReactPDF, { Text } from '@react-pdf/renderer'
import compose from '../styles/compose'
import '../css/fullname.css'

interface Props {
  className?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  pdfMode?: boolean
  style?: ReactPDF.Styles
}

const FullNameEditableInput: FC<Props> = ({ className, placeholder, value, onChange, pdfMode, style }) => {
    const [inner, setInner] = useState<ReactNode>(<></>)
    
    function bold3(){
        // inp.style.color = 'transparent';
        setInner(
            <span className={'input ' + (className ? className : '')} style={{...style, }}><b>{value!.substring(0, 3)}</b>{value!.substring(3)}</span>
        );
    }
  
    return (
    <>
      {pdfMode ? (
        <Text style={{...compose('span ' + (className ? className : '')), ...style}}>{value}</Text>
      ) : (
        <div className='parent'>
            <input
            onKeyUp={bold3}
            type="text"
            className={'fullname ' + (className ? className : '')}
            placeholder={placeholder || ''}
            value={value || ''}
            style={style}
            onChange={onChange ? (e) => onChange(e.target.value) : undefined}
            />
            {inner}
        </div>
      )}
    </>
  )
}


export default FullNameEditableInput

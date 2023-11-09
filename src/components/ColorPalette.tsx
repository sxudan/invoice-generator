import React, { useEffect, useState } from "react"
import '../css/only_for_templates/_checkmark.css'

type ColorPaletteProps = {
    onSelected?: (color: string) => void
}

const ColorPalette = ({ onSelected }: ColorPaletteProps) => {
    const [selected, setColor] = useState('#000')
    const colors = ['#000', '#e56e18', '#1d4ab8', '#2f9e85', '#b71e1e']

    useEffect(() => {
        onSelected?.call(this, selected)
    }, [selected])

    return (
        <div style={styles.container}>
            {colors.map((color) => <span onClick={() => {
                setColor(color)
            }} className="line-item" style={{backgroundColor: color}} >{selected == color ? '✓' : ''}</span>)}
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        margin: '16px 0'
    }
}

export default ColorPalette
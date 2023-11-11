import React, { useEffect, useState } from "react"
import '../css/only_for_templates/_checkmark.css'
import { Theme, theme1, theme2, theme3, theme4, theme5, theme6 } from '../styles/themes'

type ColorPaletteProps = {
    value: Theme
    onSelected?: (theme: Theme) => void
}

const ColorPalette = ({ value, onSelected }: ColorPaletteProps) => {
    const [selected, setTheme] = useState(theme1)
    // const colors = ['#000', '#e56e18', '#1d4ab8', '#2f9e85', '#b71e1e']
    const themes = [theme1, theme2, theme3, theme4, theme5, theme6]

    useEffect(() => {
        setTheme(value)
    }, [value])


    return (
        <div style={styles.container}>
            {themes.map((theme) => <span onClick={() => {
                setTheme(theme)
                onSelected?.call(this, theme)
            }} className="line-item" style={{backgroundColor: theme.primaryColor}} >{selected.primaryColor == theme.primaryColor ? '✓' : ''}</span>)}
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        margin: '16px 0',
        justifyContent: 'center'
    }
}

export default ColorPalette
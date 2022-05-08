import React from 'react'
import useTheme from '../../hooks/useTheme'

import Bright from '../../assets/brightness6.svg'
import './style.css'

const themeColors = ['orange', '#249c6b', 'red', 'purple']

const ThemeSelector = () => {
    const { changeColor, mode, changeMode } = useTheme()

    const handleChangeMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    return (
       <div className="theme-selector">
           <div className="mode-toggle">
               <img onClick={handleChangeMode} src={Bright} alt="light and dark mode" style={{filter:mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}} />
           </div>
           <div className="theme-buttons">
               {themeColors.map((color) => {3
                   return <div key={color} style={{ background:color }} onClick={() => changeColor(color)} />
               })}
           </div>
       </div>
    )
}

export default ThemeSelector
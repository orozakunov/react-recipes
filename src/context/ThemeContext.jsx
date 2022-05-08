import React, { useReducer, useEffect } from 'react'

const themeReducer = (state,action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {...state, color:action.payload}
      case 'CHANGE_MODE':
        return {...state, mode:action.payload}
      default:
        return state
  }
}

export const ThemeContext = React.createContext()

export const ThemeProvider = ({children}) => {
  const [state, dispatch] = useReducer(themeReducer, {
    color: 'purple',
    mode:'light'
  })

  const changeColor = (color) => {
    dispatch({
      type: 'CHANGE_COLOR',
      payload: color
    })

    sessionStorage.setItem('color', color)
  }
  useEffect(() => {
    const siteColor = sessionStorage.getItem('color')
    if(siteColor) {
      dispatch({
        type: 'CHANGE_COLOR',
        payload: siteColor
      })
    }
  }, [])

  const changeMode = (mode) => {
    dispatch({
      type: 'CHANGE_MODE',
      payload: mode
    })

    localStorage.setItem('mode', mode)
  }
  useEffect(() => {
    const siteMode = localStorage.getItem('mode')
    if (siteMode) {
      dispatch({
        type: 'CHANGE_MODE',
        payload: siteMode
      })
    }
  }, [])
  
  return (
    <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
      {children}
    </ThemeContext.Provider>
  )
}

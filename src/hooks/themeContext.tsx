import React, { createContext, useState, useContext } from 'react'
import Dark from '../styles/themes/dark'
import Light from '../styles/themes/light'

interface ITheme {
  title: string,

  color: {
    primary: string
    primaryShadow: string
    secondary: string
    secondaryShadow: string
    tertiary: string
    borderColor: string
    font: string
    sectionA: string
    sectionB: string
    sectionC: string
  }
}

interface IThemeContext {
  changeTheme(): void
  theme: ITheme
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem('@grand-chef:theme')

    if (themeSaved) {
      return JSON.parse(themeSaved)
    } else {
      return Light
    }
  })

  const changeTheme = () => {
    if(theme.title === 'light') {
      setTheme(Dark)
      localStorage.setItem('@grand-chef:theme', JSON.stringify(Dark))
    } else {
      setTheme(Light)
      localStorage.setItem('@grand-chef:theme', JSON.stringify(Light))
    }
  }

  return(
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext)
  return context
}

export { ThemeProvider, useTheme }
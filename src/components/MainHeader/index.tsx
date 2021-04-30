import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { useTheme } from '../../hooks/themeContext';
import Toggle from '../Toggle';
import { Container } from './styles';

interface IMainHeaderProps {
  children: string
}

const MainHeader: React.FC<IMainHeaderProps> = ({ children }) => {
  const { changeTheme, theme } = useTheme()

  const [lightTheme, setLightTheme] = useState(() => theme.title === 'light' ? true : false)

  const handleChangeTheme = () => {
    setLightTheme(!lightTheme)
    changeTheme()
  }


  return (
    <Container>
      <div>
        <IoMenu />
        <h1>{children}</h1>
      </div>

      <Toggle
        labelLeft='Dark'
        labelRigth='Light'
        checked={lightTheme}
        onChange={handleChangeTheme}  
      />
      
    </Container>
  )
}

export default MainHeader;
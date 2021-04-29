import React from 'react';
import { IoMenu } from "react-icons/io5";
import { Container } from './styles';

interface IMainHeaderProps {
  children: string
}

const MainHeader: React.FC<IMainHeaderProps> = ({ children }) => {
  return (
    <Container>
      <IoMenu />
      <h1>{children}</h1>
    </Container>
  )
}

export default MainHeader;
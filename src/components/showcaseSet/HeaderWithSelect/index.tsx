import React from 'react';
import SelectInput from '../../Inputs/Select';

import { Container } from './styles';

interface IHeaderProps {
  children: string
  selectType: string
  selectOptions: {
    key: string
    value: string
  }[]
}

const HeaderWithSelect: React.FC<IHeaderProps> = ({ children, selectType, selectOptions }) => {
  return (
    <Container>
      <h2>{children}</h2>
      <SelectInput type={selectType} options={selectOptions}/>
    </Container>
  )
}

export default HeaderWithSelect;
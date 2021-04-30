import React from 'react';
import HeaderWithSelect from '../HeaderWithSelect';

import { Container } from './styles';

const ServiceShowcase: React.FC = () => {

  const options = ["Mais utilizados", "Maior desconto"]

  return (
    <Container>
      <HeaderWithSelect
        selectType="Serviços"
        selectOptions={options}
      >Serviços</HeaderWithSelect>
    </Container>
  )
}

export default ServiceShowcase;
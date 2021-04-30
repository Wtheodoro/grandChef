import React from 'react';
import HeaderWithSelect from '../HeaderWithSelect';
import ServiceTrack from '../tracks/ServiceTrack';
import Services from '../../../assets/db/services'
import { Container } from './styles';

const ServiceShowcase: React.FC = () => {

  const options = [
    {key: "Mais utilizados", value: "mostUsed"},
    {key: "Maior desconto", value: "biggestDiscount"},
  ]

  return (
    <Container>
      <HeaderWithSelect selectType="Serviços" selectOptions={options}>
        Serviços
      </HeaderWithSelect>
      {
        Services.map(i => (
          <ServiceTrack 
            key={i.name}
            name={i.name}
            amount={i.amount}
            averagePrice={i.averagePrice}
          />
        ))
      }
    </Container>
  )
}

export default ServiceShowcase;
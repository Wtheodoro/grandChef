import React from 'react';
import { Container } from './styles';

interface IServiceTrack {
  name: string
  amount: number
  averagePrice: number
}

const ServiceTrack: React.FC<IServiceTrack> = ({ name, amount, averagePrice}) => {
  return (
    <Container>
      <p className="service_name">{name}</p>
      <p>Quantidade: {amount} - R$ {averagePrice} em média</p>
    </Container>
  )
}

export default ServiceTrack;
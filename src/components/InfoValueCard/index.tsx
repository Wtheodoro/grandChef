import React from 'react';
import { Container } from './styles';

interface InfoValueCardProps {
  icon: any
  title: string
  unit: string
  value: string
  valueConfig: 'sufix' | 'prefix'
  contrast?: boolean
}

const InfoValueCard: React.FC<InfoValueCardProps> = ({ icon, title, unit, value, valueConfig, contrast}) => {
  return (
  <Container contrast={contrast}>
    {icon}
    <div>
      <h3>{title}</h3>
      {
        valueConfig === 'sufix' 
        ?
        <strong>{value} {unit}</strong>
        :
        <strong>{unit} {value}</strong>
      }
    </div>
  </Container>)
}

export default InfoValueCard;
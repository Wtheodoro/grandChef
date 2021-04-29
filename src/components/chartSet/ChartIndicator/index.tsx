import React from 'react';
import { Container, Dot, Description, Value } from './styles';

interface IChartIndicatorProps {
  indexColor: string
  description: string
  value: number
}

const ChartIndicator: React.FC<IChartIndicatorProps> = ({ indexColor, description, value }) => {

  const converValue = (value: number) => {
    const num = value.toFixed(2)
    const str = String(num).replace('.', ',')

    return str
  }

  return (
    <Container>
      <Dot indexColor={indexColor}/>
      <Description>
        {description} <Value>{`(R$ ${converValue(value)})`}</Value>
      </Description>
    </Container>
  )
}

export default ChartIndicator;
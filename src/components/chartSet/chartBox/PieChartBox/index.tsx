import React from 'react';
import ChartIndicator from '../../ChartIndicator';
import PieChart from '../../charts/PieChart';

import { Container, ChartContainer, InfoContainer } from './styles';

const PieChartBox: React.FC = () => {
  return (
    <Container>
      <ChartContainer>
        <PieChart />
      </ChartContainer>

      <InfoContainer>
        <h2>Promoções mais utilizadas</h2>
        <ChartIndicator description="Taxa de entrega grátis" value={300} indexColor="#EF6C00"/>
        <ChartIndicator description="Promoção de Segunda-feira" value={150} indexColor="#F28A33"/>
        <ChartIndicator description="Promoção de Terça-feira" value={150} indexColor="#8F4100"/>
      </InfoContainer>
    </Container>
  )
}

export default PieChartBox;

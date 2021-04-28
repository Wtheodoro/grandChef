import React from 'react';
import LineChart from '../charts/LineChart';
import { Container, Title, ChartContainer } from './styles';

const LineChartBox: React.FC = () => {
  return (
    <Container>
      <Title>Faturamento diário</Title>

      <ChartContainer>
        <LineChart />
      </ChartContainer>
    </Container>
  )
}

export default LineChartBox;
import React from 'react';
import { useTheme } from '../../../../hooks/themeContext';
import ChartIndicator from '../../ChartIndicator';
import PieChart from '../../charts/PieChart';

import { Container, ChartContainer, InfoContainer } from './styles';

const PieChartBox: React.FC = () => {

  const { theme } = useTheme()
  const { sectionA, sectionB, sectionC } = theme.color
  
  return (
    <Container>
      <ChartContainer>
        <PieChart />
      </ChartContainer>

      <InfoContainer>
        <h2>Promoções mais utilizadas</h2>
        <ChartIndicator description="Taxa de entrega grátis" value={300} 
        indexColor={sectionA}/>
        <ChartIndicator description="Promoção de Segunda-feira" value={150}
        indexColor={sectionB}/>
        <ChartIndicator description="Promoção de Terça-feira" value={150}
        indexColor={sectionC}/>
      </InfoContainer>
    </Container>
  )
}

export default PieChartBox;

import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js'
import { Container } from './styles'
import { useTheme } from '../../../../hooks/themeContext';

const PieChart: React.FC = () => {
  const [radius, setRadius] = useState<number>(100)
  const { theme } = useTheme()

  useEffect(() => {
    const condition = window.innerWidth
    if (condition > 1350) {
      setRadius(130)
    } else if (condition > 1000) {
      setRadius(115)
    } else if (condition > 300){
      setRadius(100)
    } else {
      setRadius(80)
    }
  }, [])

  const data: ChartData = {
    labels: ['Taxa de entrega grátis', 'Promoção de Segunda-feira', 'Promoção de Terça-feira'],
    datasets: [
      {
        label: '# of Votes',
        data: [12.5, 12.5, 75],
        backgroundColor: [
          theme.color.sectionA,
          theme.color.sectionB,
          theme.color.sectionC,
        ],
        borderWidth: 0,
        radius: radius,
      },
    ],
  };

  const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      }
    }
  }

  return (
    <Container>
      <Pie
        type='pie'
        data={data} 
        options={options}
      />
    </Container>
  )
}

export default PieChart;
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js'
import { Container } from './styles'

const PieChart: React.FC = () => {

  const data: ChartData = {
    labels: ['Taxa de entrega grátis', 'Promoção de Segunda-feira', 'Promoção de Terça-feira'],
    datasets: [
      {
        label: '# of Votes',
        data: [12.5, 12.5, 75],
        backgroundColor: [
          '#F28A33',
          '#8F4100',
          '#EF6C00',
        ],
        borderWidth: 0,
        radius: 130,
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
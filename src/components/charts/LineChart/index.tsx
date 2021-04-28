import React from 'react';
import { Line } from 'react-chartjs-2'

const LineChart: React.FC = () => {
  const dataLabels = ['abr 3', 'abr 4', 'abr 5', 'abr 6', 'abr 7', 'abr 8', 'abr 9']
  const dataValues = [100, 200, 160, 200, 300, 200, 400]

  const data = {
    labels: dataLabels,
    datasets: [
      {
        label: 'Faturamento em R$',
        data: dataValues,
        fill: false,
        backgroundColor: '#EF6C00',
        borderColor: '#EF6C00',
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: 'top',
      },
    },

    scales: {
      y: {
        min: Math.min(...dataValues),
        max: Math.max(...dataValues) + 100,
        ticks: {
          stepSize: 100,
        },
      },
    },
  }

  return (
    <Line 
      type='line'
      data={data}
      options={options}
    />
  )
}

export default LineChart;
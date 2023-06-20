import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ chartData }) => {
console.log("chartData",chartData);

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
 
    setChartOptions({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Daily Revenue'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
  }, [])

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[60vh] h-[60vh] m-auto p-10 border rounded-lg bg-white shadow-sm'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default ChartComponent;
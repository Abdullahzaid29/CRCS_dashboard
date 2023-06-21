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

const ChartComponent = ({ label,data }) => {
// console.log("chartData",chartData);

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    
 
    setChartOptions({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Users Registered'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
  }, [])
  const chartdata = {
    labels: label,
    datasets: [
      {
        label: "Users",
        data: data,
        borderColor: 'rgb(255,165,0)',
        backgroundColor: 'rgb(255,165,0)',
        borderWidth: 1,
      },
    ],}
  

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[60vh] h-[60vh] m-auto p-10 border rounded-lg bg-white shadow-sm'>
        <Bar data={chartdata} options={chartOptions} />
      </div>
    </>
  );
};

export default ChartComponent;
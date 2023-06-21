import React,{useEffect,useState} from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Graph({ label,data }) {
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
  <div className='w-full md:col-span-2 relative lg:h-[60vh] h-[60vh] m-auto p-10 border rounded-lg bg-white'>
  <Line data={chartdata}  options={chartOptions}/>

  </div>
</>
  )
}

export default Graph;
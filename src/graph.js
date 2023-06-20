import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function graph({ chartData }) {
  return (
  <>
  <div className='w-full md:col-span-2 relative lg:h-[60vh] h-[60vh] m-auto p-10 border rounded-lg bg-white'>
  <Line data={chartData} />

  </div>
</>
  )
}

export default graph;
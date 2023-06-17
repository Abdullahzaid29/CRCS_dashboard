import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function graph({ chartData }) {
  return (
  <>
  <div className='w-full md:col-span-2 relative lg:h-[35vh] h-[40vh] m-auto p-4 border rounded-lg bg-white'>
  <Line data={chartData} />;

  </div>
</>
  )
}

export default graph;
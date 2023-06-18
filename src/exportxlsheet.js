import React from 'react'
// import { writeFile } from 'fs';
import { saveAs } from 'file-saver';
import { utils } from 'xlsx';
const XLSX = require('xlsx');

function exportxlsheet({data}) {
    const handleExport = () => {
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(data);
    
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'myData.xlsx');
      };
    
      return (
  <button onClick={handleExport} className='mb-4 px-5 py-2 mx-20 border border-gray-200 text-sm flex rounded-lg bg-amber-500 text-white active:bg-amber-600 font-bold uppercase  text-center	'>
EXPORT
  </button>
        // <button onClick={handleExport} type="button" class="text-white bg-orange-400 hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm text-center  dark:bg-orange-400 dark:hover:bg-orange-400 dark:focus:ring-orange-400">Export</button>
// {/* <button class="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-xs  rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-20
// " type="button"
//       >
// EXPORT
// </button> */}
      );
}

export default exportxlsheet
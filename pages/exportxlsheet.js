import React from 'react'
// import { writeFile } from 'fs';
import { saveAs } from 'file-saver';
import { utils } from 'xlsx';
function exportxlsheet({data}) {
    const handleExport = () => {
        const workbook = utils.book_new();
        const sheetData = [['Name', 'Email'], ...data]; // Assuming `data` is an array of arrays
    
        const worksheet = utils.aoa_to_sheet(sheetData);
        utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
    
        const excelBuffer = utils.write(workbook, { type: 'buffer', bookType: 'xlsx' });
        const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
        saveAs(excelBlob, 'data.xlsx');
      };
    
      return (
  
        <button onClick={handleExport} type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-1 py-2.5 text-center mr-1 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Export</button>

      );
}

export default exportxlsheet
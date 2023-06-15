var XLSX = require('xlsx')
export default async function handler  (req, res) {
    // const data = { message: 'Hello from the API!' };
    const filePath ="data/dummydataset.xlsx"; // Replace with the path to your Excel file
    const workbook =  XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Assuming you want to read the first sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    let data = []
    for (let i = 1; i < jsonData.length; i++) {
        
        // console.log(jsonData.length);
        let id =  jsonData[i][0];
        let name = jsonData[i][1]
        let address = jsonData[i][2]
        let state = jsonData[i][3]
        let District = jsonData[i][4]
        let Registration = jsonData[i][5]
        let AreaOperation = jsonData[i][6]
        let SectorType = jsonData[i][7]
        if(id){
            data.push({id:id,name:name,address:address,state:state,District:District,Registration:Registration,AreaOperation:AreaOperation,SectorType:SectorType})

        }


    }
    res.status(200).json(data);

    
  }
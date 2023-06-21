import React from 'react'

function hometable2({data}) {
  return (
    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
    <h3 class="text-xl leading-none font-bold text-gray-900 mb-10">Acquisition Overview</h3>
    <div class="block w-full overflow-x-auto">
       <table class="items-center w-full bg-transparent border-collapse">
          <thead>
             <tr>
                <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Top Channels</th>
                <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Users</th>
                <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
             </tr>
          </thead>
          {data.length==0?
      //   <div
      //   className=" inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      //   role="status">
      //   <span
      //     class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      //     >Loading...</span
      //   >
      // </div>
      <div>
        <h2>No data available</h2>
      </div>
      :    <tbody>
            {data.map(item =>{
                let per = (item.count / 100)*100
                return(
                    <>
                    
             <tr class="text-gray-500" key={item.div}>
                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left text-black font-medium">{item.sector}</th>
                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">{item.count==0?'':item.count}</td>
                <td class="border-t-0 px-2 align-middle text-xs whitespace-nowrap p-4">
                    {item.count &&
                         <div class="flex items-center">
                         <span class="mr-2 text-xs font-medium">{item.count==0?'':( (item.count / 100)*100).toFixed(1)}%</span>
                        <div class="relative w-full">
                            <div class="w-full bg-gray-200 rounded-sm h-2">
                               <div class="bg-orange-400 h-2 rounded-sm"  style={{"width":per}}></div>
                            </div>
                         </div>
                      </div>
                    }
              
                </td>
             </tr>
            
     
                    </>
                   
                )

            })}
     
      
       
        </tbody>}
       </table>
    </div>
 </div>
  )
}

export default hometable2
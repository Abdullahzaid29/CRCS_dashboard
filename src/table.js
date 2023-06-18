import React from 'react'

function table({data}) {
  return (
    <table className="w-full text-sm text-left text-white dark:text-gray-400">
        <thead className="text-xs text-black uppercase bg-white border-b-2 py-5 my-5">
            <tr>
            <th scope="col" class="px-3 py-3">
                s.no
                </th>
                <th scope="col" class="px-3 py-3">
                name
                </th>
                <th scope="col" class="px-3 py-3">
                address
                </th>
                <th scope="col" class="px-3 py-3">
                state                </th>
                <th scope="col" class="px-3 py-3">
                District                </th>
                <th scope="col" class="px-3 py-3">
                AreaOperation
                </th>
                <th scope="col" class="px-3 py-3">
                SectorType                </th>
                {/* <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th> */}
            </tr>
        </thead>
        {data.length==0?
        <div
        className=" inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span
        >
      </div>
      :    <tbody>
            {data.map(item =>{
                return(
                    <>
                     <tr class="bg-white border-b hover:bg-gray-100 w-full text-gray-700" key={item.id}>
                     <td class="px-3 py-4">
                    {item.id}
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium  text-gray-900 ">
                      {item.name}
                    </th>
                    <td class="px-3 py-4">
                    {item.address}
                    </td>
                    <td class="px-3 py-4">
                    {item.state}
                       
                    </td>
                    <td class="px-3 py-4">
                    {item.District}

                    </td>
                    <td class="px-3 py-4">
                    {item.AreaOperation}

                    </td>
                    <td class="px-3 py-4">
                    {item.SectorType}
                    </td>
                    <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                  </tr>
                    </>
                   
                )

            })}
     
      
       
        </tbody>}
    
    </table>
  )
}

export default table
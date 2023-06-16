import React,{useEffect,useState} from 'react'
import axios from "axios";
export default function Users() {
    const getdata = axios.get("https://crcs-dashboard-2023.vercel.app/api/users/user");
      const [data,setData] = useState([])
      useEffect( () => {
      (  async function datas (){
        if (!data) {
            return null;
        } else {
              try {
     
      getdata.then((response) => {
        // console.log(response);
        setData(response.data)
      })
          } catch (err) {
            console.log('pages auth in error');
            console.log(err);
          }
        }
        
        })();
      },[]);
      console.log(data);
 
    return (
      <>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Users</p>
  
        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          <div className="rounded bg-white h-40 shadow-sm"></div>
          <div className="rounded bg-white h-40 shadow-sm"></div>
          <div className="rounded bg-white h-40 shadow-sm"></div>
        </div>
        <div className='px-10 py-10  bg-white'>
   <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg py-5 px-5 w-full">
    <table className="w-full text-sm text-left text-white dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-white">
            <tr>
            <th scope="col" class="px-6 py-3">
                s.no
                </th>
                <th scope="col" class="px-6 py-3">
                name
                </th>
                <th scope="col" class="px-6 py-3">
                address
                </th>
                <th scope="col" class="px-6 py-3">
                state                </th>
                <th scope="col" class="px-6 py-3">
                District                </th>
                <th scope="col" class="px-6 py-3">
                AreaOperation
                </th>
                <th scope="col" class="px-6 py-3">
                SectorType                </th>
                {/* <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th> */}
            </tr>
        </thead>
        {data.length==0?<div>loading</div>:    <tbody>
            {data.map(item =>{
                return(
                    <>
                     <tr class="bg-white border-b hover:bg-gray-100" key={item.id}>
                     <td class="px-6 py-4">
                    {item.id}
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium ">
                      {item.name}
                    </th>
                    <td class="px-6 py-4">
                    {item.address}
                    </td>
                    <td class="px-6 py-4">
                    {item.state}
                       
                    </td>
                    <td class="px-6 py-4">
                    {item.District}

                    </td>
                    <td class="px-6 py-4">
                    {item.AreaOperation}

                    </td>
                    <td class="px-6 py-4">
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
   </div>
</div>
      </>
    );
  }
  
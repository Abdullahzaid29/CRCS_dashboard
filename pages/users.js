import React,{useEffect,useState} from 'react'
import axios from "axios";
import Pagination from './pagination';
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";

export default function Users() {
    const getdata = axios.get("https://crcs-server.onrender.com/api/user");
      const [data,setData] = useState([])
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(10);
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
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    console.log("currentPosts",currentPosts);
      // Change page
      const paginateFront = () => setCurrentPage(currentPage + 1);
      const paginateBack = () => setCurrentPage(currentPage - 1);
    
    return (
      <>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Users</p>
  
        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          <div className="rounded bg-white h-40 shadow-sm">
          <div className=" rounded bg-white h-40 shadow-sm grid grid-rows-3 grid-flow-col gap-4">
        <h2 className=" text-1xl font-bold mb-2 mt-5 px-4 py-2">Number Of Societies</h2>
        <span className='font-bold mb-2 mt-2 px-10 py-2 '>{data.length}</span>
        <UserIcon className="h-10 w-10 row-span-2 col-span-2 mt-10" />
        </div>
          </div>
          <div className="rounded bg-white h-40 shadow-sm"></div>
          <div className="rounded bg-white h-40 shadow-sm"></div>
        </div>
        <div className='px-10 py-10  bg-white'>
   <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg py-5 px-5 w-full">
    <table className="w-full text-sm text-left text-white dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-white border-b-2 py-5">
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
        {currentPosts.length==0?
        <div
        className=" inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span
        >
      </div>:    <tbody>
            {currentPosts.map(item =>{
                return(
                    <>
                     <tr class="bg-white border-b hover:bg-gray-100 w-full text-gray-700" key={item.id}>
                     <td class="px-3 py-4">
                    {item.id}
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium ">
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
    <Pagination 
       postsPerPage={postsPerPage}
       totalPosts={data.length}
       paginateBack={paginateBack}
       paginateFront={paginateFront}
       currentPage={currentPage}
   />
   </div>


</div>
      </>
    );
  }
  
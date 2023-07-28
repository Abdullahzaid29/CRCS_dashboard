import React,{useEffect,useState} from 'react'
import axios from "axios";
import Pagination from '../src/pagination';
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import Table from '../src/table';
import Exportxlsheet from '../src/exportxlsheet';
export default function Users() {
    const getdata = axios.get("https://crcs-server.onrender.com/api/user");
      const [data,setData] = useState([])
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(10); 
      const [filterValues, setFilterValues] = useState({
        name: '',
        state: '',
        sector: '',
      });
      const removeDuplicates = (data,options) => {
        const uniqueOptions = [];
        switch (options) {
          case "state":
            data.forEach((option) => {
              const foundOption = uniqueOptions.find((uniqueOption) => uniqueOption.state === option.state);
        
              if (!foundOption) {
                uniqueOptions.push(option);
              }
            });
            break;
          case "SectorType":

           data.forEach((option) => {
        const foundOption = uniqueOptions.find((uniqueOption) => uniqueOption.SectorType === option.SectorType);
  
        if (!foundOption) {
          uniqueOptions.push(option);
        }
      });
          default:
            break;
        }
 
      
    
        return uniqueOptions;
      };
      useEffect( () => {
      (  async function datas (){
        if (!data) {
            return null;
        } else {
              try {
     
            axios.get("https://crcs-server.onrender.com/api/user").then((response) => {
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
      const uniqueOptions = removeDuplicates(data,"state");
      const sectoroptions = removeDuplicates(data,"SectorType")
      console.log(sectoroptions,"sectoroptions");
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    console.log("currentPosts",currentPosts);
      // Change page
      const paginateFront = () => setCurrentPage(currentPage + 1);
      const paginateBack = () => setCurrentPage(currentPage - 1);
      const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterValues((prevFilterValues) => ({
          ...prevFilterValues,
          [name]: value,
        }));
      };
    
      const filteredData = currentPosts.filter((item) => {
        return (
          item.name.toLowerCase().includes(filterValues.name.toLowerCase()) &&
          item.state.toLowerCase().includes(filterValues.state.toLowerCase()) &&
          item.SectorType && item.SectorType.toLowerCase().includes(filterValues.sector.toLowerCase())
        );
      });
  
 
    // console.log(options);
    return (
      <>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Users</p>
{/*   
        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          <div className="rounded bg-white h-40 shadow-sm">
          <div className=" rounded bg-white h-40 shadow-sm grid grid-rows-3 grid-flow-col gap-4">
        <h2 className=" text-1xl font-bold mb-2 mt-5 px-4 py-2 text-xl">Number Of Societies</h2>
        <span className='font-bold mb-2 mt-2 px-10 py-2 text-2xl text-orange-400'>{data.length}</span>
        <UserIcon className="h-10 w-10 row-span-2 col-span-2 mt-10 bg-white" />
        </div>
          </div>
          <div className="rounded bg-white h-40 shadow-sm">
          <div className=" rounded bg-white h-40 shadow-sm grid grid-rows-3 grid-flow-col gap-4">
        <h2 className=" text-1xl font-bold mb-2 mt-5 px-4 py-2 text-xl">Number Of states</h2>
        <span className='font-bold mb-2 mt-2 px-10 py-2 text-2xl text-orange-400'>{uniqueOptions.length}</span>
        <UserIcon className="h-10 w-10 row-span-2 col-span-2 mt-10 bg-white" />
        </div>
          </div>
          <div className="rounded bg-white h-40 shadow-sm">
          <div className=" rounded bg-white h-40 shadow-sm grid grid-rows-3 grid-flow-col gap-4">
        <h2 className=" text-1xl font-bold mb-2 mt-5 px-4 py-2 text-xl">Number Of sectors</h2>
        <span className='font-bold mb-2 mt-2 px-10 py-2 text-2xl text-orange-400'>{sectoroptions.length}</span>
        <UserIcon className="h-10 w-10 row-span-2 col-span-2 mt-10 bg-white" />
        </div>
          </div>
        </div> */}

        <div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div class="flex items-center">
                        <div class="flex-shrink-0">
                           <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{data.length}</span>
                           <h3 class="text-base font-normal text-gray-500">Number Of Societies</h3>
                        </div>
                        {/* <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                           14.6%
                           <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                           </svg>
                        </div> */}
                     </div>
                  </div>
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div class="flex items-center">
                        <div class="flex-shrink-0">
                           <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{uniqueOptions.length}</span>
                           <h3 class="text-base font-normal text-gray-500">Number Of states</h3>
                        </div>
                        {/* <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                           32.9%
                           <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                           </svg>
                        </div> */}
                     </div>
                  </div>
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div class="flex items-center">
                        <div class="flex-shrink-0">
                           <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{sectoroptions.length}</span>
                           <h3 class="text-base font-normal text-gray-500">Number Of sectors</h3>
                        </div>
                        {/* <div class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                           -2.7%
                           <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                           </svg>
                        </div> */}
                     </div>
                  </div>
               </div>
        <div className='px-10 py-10  bg-white'>
          
   <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg py-5 px-5 w-full">
    <div className='grid lg:grid-cols-4 gap-1'>
    <input
        type="text"
        value={filterValues.name}
        name="name"
        onChange={handleFilterChange}
        placeholder="Search by name"
        // className="p-1 mb-4 px-5 py-2 ml-20 border border-black text-sm flex rounded-lg"
        className="mb-4 px-5 py-2 ml-20 border border-black text-sm flex rounded-lg	"
      />
        {/* <input
        type="text"        value={filterValues.state}
        name="state"

        onChange={handleFilterChange}
        placeholder="Search by state"
        className="mb-4 px-5 py-2 mx-20 border border-black text-sm flex rounded-lg	"
      /> */}
      {/* <label for="state">Search by state</label> */}

       <select value={filterValues.state} onChange={handleFilterChange}    name="state"     placeholder="Search by state"
           className="mb-4 px-5 py-2 ml-20 border border-black text-sm flex rounded-lg	"
       >
      <option value="">select by state</option>
      {uniqueOptions.map((option) => (
        <option key={option.id} value={option.state}>
          {option.state}
        </option>
      ))}
      
    </select>
    <select value={filterValues.sector} onChange={handleFilterChange}    name="sector"     placeholder="Search by sector"
           className="mb-4 px-5 py-2 ml-20 border border-black text-sm flex rounded-lg	"
       >
      <option value="">select by sector</option>
      {sectoroptions.map((option) => (
        <option key={option.id} value={option.SectorType}>
          {option.SectorType}
        </option>
      ))}
      
    </select>
    <Exportxlsheet data={data} />
{/* 
<input
        type="text"
        value={filterValues.sector}
        name="sector"

        onChange={handleFilterChange}
        placeholder="Search by sector type"
        className="mb-4 px-5 py-2 mx-20 border border-black text-sm flex rounded-lg	"
      /> */}
    </div>

<Table data={filteredData} />
    <Pagination 
       postsPerPage={postsPerPage}
       totalPosts={data.length}
       paginateBack={paginateBack}
       paginateFront={paginateFront}
       currentPage={currentPage}
       data = {currentPosts}
   />
   </div>


</div>
      </>
    );
  }
  
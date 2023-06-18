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
          item.SectorType.toLowerCase().includes(filterValues.sector.toLowerCase())
        );
      });
  
 
    // console.log(options);
    return (
      <>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Users</p>
  
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
        </div>
        <div className='px-10 py-10  bg-white'>
   <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg py-5 px-5 w-full">
    <div className='grid lg:grid-cols-4 gap-1 '>
    <input
        type="text"
        value={filterValues.name}
        name="name"
        onChange={handleFilterChange}
        placeholder="Search by name"
        className="p-1 mb-4 px-5 py-2 ml-20 border border-black text-sm flex rounded-lg"
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
           className="mb-4 px-5 py-2 mx-20 border border-black text-sm flex rounded-lg	"
       >
      <option value="">All</option>
      {uniqueOptions.map((option) => (
        <option key={option.id} value={option.state}>
          {option.state}
        </option>
      ))}
      
    </select>
    <select value={filterValues.sector} onChange={handleFilterChange}    name="sector"     placeholder="Search by sector"
           className="mb-4 px-5 py-2 mx-20 border border-black text-sm flex rounded-lg	"
       >
      <option value="">All</option>
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
  
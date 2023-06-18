import React,{useEffect,useState} from 'react'
import axios from "axios";
import ChartComponent from '../src/chartcomponent';
import Graph from '../src/graph';
// import Map from './map';
import { UserData } from '../data/data';
import dynamic from "next/dynamic"
const Map = dynamic(() => import("./maps"), { ssr:false })


export default function Home() {
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

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        borderColor: 'rgb(255,165,0)',
        backgroundColor: 'rgb(255,165,0)',
        borderWidth: 1,
      },
    ],
  });


  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-2 gap-5 mb-16 ">
     
        <div className="rounded bg-white h-60 shadow-sm">
        <ChartComponent chartData={userData} />

        </div>
        <div className="rounded bg-white h-60 shadow-sm mb-16">
          <Graph chartData={userData} />
        </div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm mb-16 px-10 py-10">
        <Map />
      </div>
    </>
  );
}

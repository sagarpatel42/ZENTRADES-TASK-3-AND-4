import React, { useEffect } from "react";
import Cards from "./cards";
import ChartJS from "./chart";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  
  const navigate = useNavigate()
  const check = () => {
    if(localStorage.getItem("zentrades"))
    {
      //localStorage.removeItem("zentrades")
    
    }
    else{
      navigate("/")
    }
  } 


  useEffect(() => {
    check();
  },)


  const arr = [
    {
       "Total Revenue":"$100"
    },
    {
       "Total Jobs Avg " :"$200"
    },
    {
        "Tickets Created":"$300"
     },
     {
        "Tickets Scheduled" :"$400"
     },
     {
        "Outstanding Amount":"$500"
     },
     {
        "Memberships Sold" :"$600"
     },
     {
        "Jobs Completed":"$700"
     },
     {
        "Total canceled" :"$800"
     }
  ]
  return (
    <div className="p-5 bg-[#DAE0E2] min-h-screen">
      {/* company metric */}
      <div>
        <div className="mb-5">
          <h1 className="font-bold text-xl">Company metrics</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {arr.map((e, key) => {
            return (
                <Cards key={key} e={e}/>
            );
          })}
        </div>
      </div>
      {/* Revenue by job location */}


    <div className="flex flex-wrap my-20 my-3">

<div className="w-full md:w-1/2 mb-4 md:mb-0 pr-2">
  <h1 className="font-bold text-xl my-2">Revenue by Job Location</h1>
  {/* First Chart */}
  <ChartJS
    labels={[
      "Everett",
      "Seattle",
      "Lynnwood",
      "Bothell",
      "Mukilteo",
      "Edmonds",
    ]}
    dataset={[100000, 80000, 50000, 40000, 25000, 10000]}
    title={""}
    color={"#78BE43"}
    xaxis={"Revenue for November 2019"}
    style={{ backgroundColor: 'white' }}
  />
</div>

<div className="w-full md:w-1/2 mb-4 pl-2">
  <h1 className="font-bold text-xl my-2">Revenue by Job Type</h1>
  {/* Second Chart */}
  <ChartJS
    labels={[
      "Everett",
      "Seattle",
      "Lynnwood",
      "Bothell",
      "Mukilteo",
      "Edmonds",
    ]}
    dataset={[100000, 80000, 50000, 40000, 25000, 10000]}
    title={""}
    color={"#78BE43"}
    xaxis={"Revenue for November 2019"}
  />
</div>
</div>



      </div>
  );
};

export default DashBoard;

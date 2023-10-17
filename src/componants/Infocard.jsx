import React from "react";

import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart,Pie } from 'recharts';

   
  const  Infocard = () => {
    const data = [
      {
        name: 'Jan',
        uv: 4000,
        Amt: 2400,
        amt: 2400,
      },
      {
        name: 'Feb',
        uv: 3000,
        Amt: 1398,
        amt: 2210,
      },
      {
        name: 'Mar',
        uv: 2000,
        Amt: 9800,
        amt: 2290,
      },
      {
        name: 'Apr',
        uv: 2780,
        Amt: 3908,
        amt: 2000,
      },
      {
        name: 'May',
        uv: 1890,
        Amt: 4800,
        amt: 2181,
      },
      {
        name: 'Jun',
        uv: 2390,
        Amt: 3800,
        amt: 2500,
      },
      {
        name: 'Jul',
        uv: 3490,
        Amt: 4300,
        amt: 2100,
      },
      {
        name: 'Aug',
        uv: 3490,
        Amt: 4300,
        amt: 2100,
      },
      {
        name: 'Sep',
        uv: 3490,
        Amt: 4300,
        amt: 2100,
      },
      {
        name: 'Oct',
        uv: 3490,
        Amt: 4300,
        amt: 2100,
      },
      {
        name: 'Nov',
        uv: 3490,
        Amt: 4300,
        amt: 2100,
      },
      {
        name: 'Dec',
        uv: 3490,
        Amt: 4300,
        amt: 2100,
      },
    ];
    const data01 = [
      { name: '2018', value: 4000 },
      { name: '2019', value: 3000 },
      { name: '2020', value: 3040 },
      { name: '2021', value: 4500 },
      { name: '2022', value: 4780 },
      { name: '2023', value: 4890 },
    ];
    
    return (
      <>
      <div className="lg:flex ">
      <h1 className=" pl-[3rem] mb-2 font-bold"> Overview <br/> Monthly Earning</h1>
      <h1 className=" pl-[3rem] mb-2 font-bold ml-[26rem]"> Overview <br/> Yearly Earning</h1>
      </div>
      <div className=" pl-[3rem]  lg:flex grid">
        
       <ResponsiveContainer width="55%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 30,
            bottom: 5,
          }}
          barSize={30}
          
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Amt" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
      <div className="sm:w-2">
      <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
      </div>
      </>
    );
  }

  export default Infocard
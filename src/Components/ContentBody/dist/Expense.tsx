import React, { FC, PureComponent, useState, } from 'react'
import { Stack } from 'react-bootstrap'
import './style.scss'
import UserAvaterStack from './UserAvaterStack'
import { BarChart, Bar, ResponsiveContainer, Cell, Tooltip, XAxis, YAxis } from 'recharts';

const Expense:FC=()=>{
  const [curentIndex, setcurentIndex] = useState<Number>(0)
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
          },
          {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
          },
          {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
          },
          {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
          },
          {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
          },
          {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
      ];
  return (
    <div className="firstItem">
        <Stack direction="horizontal" gap={3}>
        <h3 className="">Expenses</h3>
        <div className="ms-auto">
           <UserAvaterStack /> 
        </div>
        </Stack>
        <p className="date__font" > july, 7/13/2022 </p>
        <ResponsiveContainer width="100%" minHeight="15vh">
        <BarChart width={150} height={40} data={data}>
        <Tooltip />
          <Bar dataKey="uv" fill='rgb(78, 35, 249)' >
            {
              data.map((entry, index) => (
                  <Cell onMouseOver={()=>{setcurentIndex(index)}} key={`cell-${index}`} fill={index===curentIndex? 'blue':'gray'}/>
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Expense
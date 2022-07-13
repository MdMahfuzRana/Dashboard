import React, { FC } from 'react'
import { Stack } from 'react-bootstrap'
import './style.scss'
import UserAvaterStack from './UserAvaterStack'

const Expense:FC=()=>{
  return (
    <div className="firstItem">
        <Stack direction="horizontal" gap={3}>
        <h3 className="">Expenses</h3>
        <div className="ms-auto">
           <UserAvaterStack /> 
        </div>
        </Stack>
        <p>7/13/2022 </p>
    </div>
  )
}

export default Expense
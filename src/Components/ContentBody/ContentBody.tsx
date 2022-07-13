import React, { FC } from 'react'
import './ContentBody.scss'
import Expense from './dist/Expense'

const ContentBody:FC=({})=> {
  return (
    <div className="layOutInterFaces">
      <Expense />
    </div>
  )
}

export default ContentBody
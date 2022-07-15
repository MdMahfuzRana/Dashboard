import React, { FC } from 'react'
import IdeaPop from '../SideBarRight/IdeaPop'
import SidebarRight from '../SideBarRight/SidebarRight'
import './ContentBody.scss'
import Expense from './dist/Expense'
import Itemslist from './dist/Itemslist'

const ContentBody:FC=({})=> {
  return (
    <div className="layOutInterFaces">
      <div className="leftside" >
        <Expense />
        <Itemslist />
        <Itemslist />
      </div>
      <div className='rightside'>
        <SidebarRight />
        <IdeaPop />
      </div>
    </div>
  )
}

export default ContentBody
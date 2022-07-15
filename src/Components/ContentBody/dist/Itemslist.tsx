import React,{ FC } from 'react'
import { Stack } from 'react-bootstrap'
import { BiDotsHorizontal } from 'react-icons/bi'
import { BiHomeHeart } from 'react-icons/bi'

const Itemslist:FC=()=> {
  return (
    <div style={{marginBottom:'20px'}} >
    <Stack style={StackStyle} direction="horizontal" gap={3}>
      <div style={headerStyle} className="">Today</div>
      <div className="ms-auto"><BiDotsHorizontal style={{fontSize:'1.5rem'}} /></div>
    </Stack>
    <div>
        <Stack style={{marginTop:'10px'}} direction="horizontal" gap={3}  >
            <div className="item__icon">
                <BiHomeHeart />
            </div>
            <div className="">
                <div className='item__title' >Food and Drink</div>
                <div className='item__date'>jul 07 2021</div>
            </div>
            <div className="priceFonts ms-auto">-2792</div>
        </Stack>
    </div>
    </div>
  )
}

export default Itemslist

const headerStyle = {
    fontSize:'1.2rem',
    fontWeight:'bold',
}
const StackStyle = {

}
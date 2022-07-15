import React,{ FC } from 'react'
import { ProgressBar, Stack } from 'react-bootstrap'
    
const SidebarRight:FC=()=> {
  return (
    <div  style={{marginBottom:'20px',width:'100%'}} >
    <Stack direction="horizontal" gap={3}>
      <div style={headerStyle} className="">Where your Money go?</div>
    </Stack>
    <div>
      <div style={{marginTop:'10px'}} >
        <Stack style={{marginTop:'5px'}} direction="vertical" gap={1}>
          <Stack direction="horizontal">
            <div style={itemHeader} className=" ">Food and Drinks</div>
            <div style={itemHeader} className="ms-auto " >2846</div>
          </Stack>
          <ProgressBar now={60} />
        </Stack>
        <Stack style={{marginTop:'5px'}} direction="vertical" gap={1}>
          <Stack direction="horizontal">
            <div style={itemHeader} className=" ">Food and Drinks</div>
            <div style={itemHeader} className="ms-auto " >2846</div>
          </Stack>
          <ProgressBar now={60} />
        </Stack>
        <Stack style={{marginTop:'5px'}} direction="vertical" gap={1}>
          <Stack direction="horizontal">
            <div style={itemHeader} className=" ">Food and Drinks</div>
            <div style={itemHeader} className="ms-auto " >2846</div>
          </Stack>
          <ProgressBar now={60} />
        </Stack>
        <Stack style={{marginTop:'5px'}} direction="vertical" gap={1}>
          <Stack direction="horizontal">
            <div style={itemHeader} className=" ">Food and Drinks</div>
            <div style={itemHeader} className="ms-auto " >2846</div>
          </Stack>
          <ProgressBar now={60} />
        </Stack>
      </div>
    </div>
    </div>
  )
}

export default SidebarRight

const headerStyle = {
  fontSize:'1.2rem',
  fontWeight:'bold',
}
const itemHeader = {
  fontSize:'.9rem',
  fontWeight:'bold',
}
import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import cart from '../../assets/svg/tree.svg'
import './ideaPop.scss'

type Props = {}

function IdeaPop({}: Props) {
  return (
    <div>
        <Stack className="idea__PopStack" direction='vertical' gap={3}  >
           <div className='svg__image'>
                 <img src={cart} alt='' />
            </div> 
            <div style={{textAlign: 'center'}}>
                <h5>Save More Money</h5>
                <p>
                High-quality Dormy Imprint 11 stock text tested in the leading stamp
                </p>
            </div>
            <Button style={{width:'100%'}} variant="dark">More</Button>
        </Stack>
    </div>
  )
}

export default IdeaPop
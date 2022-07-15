import React,{ FC, useState } from 'react'
import { ListGroup, Stack } from 'react-bootstrap'
import './Sidebar.scss'


const Sidebar:FC=()=>{
  interface ListInterFaces {
      title:String
    }
  const [userImage, setuserImage] = useState<string>('https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/285200804_150469654205973_6159243901535936790_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeF5gOBwX4o6xiM1f58jaMYejZqs5cot8KKNmqzlyi3won1EtXjIeUMH420_LseYT3O_CwXzXRsMjUydRYkbYHWR&_nc_ohc=jZQGkYe5uicAX_PgLZL&_nc_ht=scontent.fdac135-1.fna&oh=00_AT85nMvWDV2aRXgp7frDH0zVL23icAY7rx8UvR9OHKMS-Q&oe=62D4A87E')
  const [listItems, setlistItems] = useState<ListInterFaces[]>([
     {
      title:'Dashboard'
     },
     {
      title:'Expenses'
     },
     {
      title:'Wallets'
     },
     {
      title:'Summary'
     },
     {
      title:'Accounts'
     },
  ])

  return (
    <div className="sidebar " >
        <div className="image_and_info" >
          <div className="sidebar__image" >
            <img src={userImage} alt="" />
          </div>
          <div className="sidebar__userInfo">
            <p className='userName' >Digital Creations</p>
            <p className='userMail' >digitalcreations@gmail.com</p>
          </div>
        </div>
        <ListGroup className="listGrupStyle" >
          {
            listItems?.map(listItem=>{
              return(
                <ListGroup.Item className="list__item" >{listItem?.title}</ListGroup.Item>
              )
            })
          }
        </ListGroup>
    </div>
  )
}

export default Sidebar



import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.scss'
import { AiOutlineMenu } from 'react-icons/ai'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { ListGroup } from 'react-bootstrap';

function BrandExample() {
  const [show, setShow] = useState<Boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    <div className='navBar' >
      <Navbar bg="white" variant="light">
        <Container >
          <Navbar.Brand href="#home">
            <AiOutlineMenu  onClick={handleShow} style={{fontSize:"2rem",fontWeight:"bold",marginRight:"10px"}} />
            Menu
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Digital Creations</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{backgroundColor:'black'}} >
        <div className="nav__sidebar " >
        <div className="nav__image_and_info" >
          <div className="nav__sidebar__image" >
            <img src={userImage} alt="" />
          </div>
          <div className="nav__sidebar__userInfo">
            <p className='nav__userName' >Digital Creations</p>
            <p className='nav__userMail' >digitalcreations@gmail.com</p>
          </div>
        </div>
        <ListGroup className="nav__listGrupStyle" >
          {
            listItems?.map(listItem=>{
              return(
                <ListGroup.Item className="nav__list__item" >{listItem?.title}</ListGroup.Item>
              )
            })
          }
        </ListGroup>
    </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default BrandExample;
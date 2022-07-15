import React from 'react'
import { BsPlusCircleDotted } from 'react-icons/bs'

function UserAvaterStack() {
  return (
    <div className="avaters" >
        <div className="back__shell" >
            <div className="avater">
                <img src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/285200804_150469654205973_6159243901535936790_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeF5gOBwX4o6xiM1f58jaMYejZqs5cot8KKNmqzlyi3won1EtXjIeUMH420_LseYT3O_CwXzXRsMjUydRYkbYHWR&_nc_ohc=jZQGkYe5uicAX_PgLZL&_nc_ht=scontent.fdac135-1.fna&oh=00_AT85nMvWDV2aRXgp7frDH0zVL23icAY7rx8UvR9OHKMS-Q&oe=62D4A87E" alt="" />
            </div>
        </div>
        <div className="back__shell" style={{marginLeft:'-10px'}} >
            <div className="avater">
                <BsPlusCircleDotted style={{fontSize:'2rem'}} />
            </div>
        </div>
    </div>
  )
}

export default UserAvaterStack
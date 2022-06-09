import React from 'react'

const UserProfile = ({user})=>{
    const avatar="https://assets.webiconspng.com/uploads/2017/01/Black-User-Icon-300x300.png"

   return (
      <div>
      
         <img src={avatar} className="avatar" alt='avatar'/>
         
          {user.Email && 
          <img src = {user.photoURL} className="avatar" alt='avatar'/>  } 
       
      </div>
     )
}
export default UserProfile

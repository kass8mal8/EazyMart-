import React from 'react'

const UserProfile = ({user})=>{
    const avatar="https://assets.webiconspng.com/uploads/2017/01/Black-User-Icon-300x300.png"

   return (
      <div>
          {user.Email ?
          <img src = {user.photoURL} className="avatar" /> :
          <img src={avatar} className="avatar" />} 
      </div>
     )
}
export default UserProfile

import React,{usestate, useRef} from 'react' 
import {signup} from './firebase '

const Signup=()=>{
  async function handleSignup(email, password){
    
  }
  return(
    <div className="container">
      <form>
        <label>Email</label>
        <input type="email"/>
        <label>Password</label>
        <input type="password"/>
        <button>signup</button>
     </form>
    </div>
  )
}
export default Signup
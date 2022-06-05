import React,{usestate, useRef} from 'react' 
import {signup} from './firebase '
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons' 

const Signup=()=>{
  const emailRef=useRef()
  const passwordRef=useRef()

  async function handleSignup(){
     try{
       await signup(emailRef.current.value, passwordRef.current.value)
     }
     catch{
       alert("error")
     }
  }
  return(
    <div className="container">
      <div><p>Create EazyMart shopping account</p></div>
      <form onSubmit={handleSignup}>
        <label>Email</label>
        <FontAwesomeIcon icon={faEnvelope}/>
        <input ref={emailRef} type="email" placeholder="email@example.com"/>
        <label>Password</label>
       <FontAwesomeIcon icon={faLock}/>
        <input ref={passwordRef} type="password" placeholder="password"/>
        <button style={{marginTop:'20px'}}>signup</button>
     </form>
    </div>
  )
}
export default Signup
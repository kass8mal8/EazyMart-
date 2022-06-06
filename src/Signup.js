import React,{useState, useRef} from 'react' 
import {signup} from './firebase '
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons' 

const Signup=({setCreated})=>{
  const emailRef=useRef()
  const passwordRef=useRef()

  async function handleSignup(){
     try{
       await signup(emailRef.current.value, passwordRef.current.value)
       setCreated(true)
    setIsPending(true)
     }
     catch{
       alert('error')
       setIsValid(true)
     }
  }
  const [isValid, setIsValid]=useState(false)
  const [isPending, setIsPending ]=useState(false)
  

  return(
    <div className="container">
      {isPending ?  <div>Loading...</div> :
      <div><p>Create EazyMart shopping account</p>
      <form onSubmit={handleSignup} id="sign-form">
        <label>Email</label>
        <FontAwesomeIcon icon={faEnvelope} className="sign-icons"/>
        <input ref={emailRef} type="email" placeholder="email@example.com"/>
        <label>Password</label>
        {isValid && <small>password less than 6 characters</small>}
       <FontAwesomeIcon icon={faLock} className ="sign-icons"/>
        <input ref={passwordRef} type="password" placeholder="password"  />
        <button style={{marginTop:'20px'}}>signup</button>
     </form>
     </div>} 
    </div>
  )
}
export default Signup
import React,{useState, useRef} from 'react' 
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
  const [isValid, setIsValid]=useState(false)
  const handleChange=(e)=>{
    if(e.target.value < 6){
        setIsValid(true)
    }
  }
  return(
    <div className="container">
      <div><p>Create EazyMart shopping account</p></div>
      <form onSubmit={handleSignup} id="sign-form">
        <label>Email</label>
        <FontAwesomeIcon icon={faEnvelope} className="sign-icons"/>
        <input ref={emailRef} type="email" placeholder="email@example.com"/>
        <label>Password</label>
        {isValid && <small>password less than 6 characters</small>}
       <FontAwesomeIcon icon={faLock} className ="sign-icons"/>
        <input ref={passwordRef} type="password" placeholder="password" onChange={handleChange} />
        <button style={{marginTop:'20px'}}>signup</button>
     </form>
    </div>
  )
}
export default Signup
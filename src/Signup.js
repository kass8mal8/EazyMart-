import React,{useState, useRef} from 'react'
import {signup, googlesignin} from './firebase '
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import {GoogleButton} from 'react-google-button' 

const Signup=({setCreated})=>{
  const emailRef=useRef()
  const passwordRef=useRef()

  const [isValid, setIsValid]=useState(false)
  const [isPending, setIsPending ]=useState(false)
 
 
  const [selectMethod, setSelectMethod] =useState(true) 

  async function handleSignup(){
       setIsPending(true) 
       try{
          await signup( emailRef.current.value, passwordRef.current.value)
          setCreated(true)
       } catch{
          setIsValid(true)
       } 
       setIsPending(false)
     
  }
  
  
  async function handleGoogleSignIn(){
      try {
        await googlesignin()
      } catch (error) {
        console.log(error.message);
      }
   }
   
  return(
    <div className="container">

     {selectMethod &&
      <div className="method-selection" >
        <GoogleButton onClick={handleGoogleSignIn} className="google-btn"/>
        <button onClick={() =>setSelectMethod(false) }>Sign in with Email</button>
      </div>} 
      
      <div>
      <p>Create EazyMart shopping account</p>
      <form onSubmit={handleSignup} id="sign-form">
        <label>Email</label>
        <FontAwesomeIcon icon={faEnvelope} className="sign-icons"/>
        <input ref={emailRef} type="email" placeholder="email@example.com"/>
        <label>Password</label>
        {isValid && <small>password less than 6 characters</small>}
       <FontAwesomeIcon icon={faLock} className ="sign-icons"/>
        <input ref={passwordRef} type="password" placeholder="password"  />
        <button style={{marginTop:'20px'}}> {isPending ? <>loading... </> : <>signup</>} </button>
     </form>
     </div> 
       
    </div>
  )
}
export default Signup

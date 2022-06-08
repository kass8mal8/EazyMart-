import React,{useState, useRef} from 'react'
import {signup} from './firebase '
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {GoogleButton} from 'react-google-button'

const Signup=({setCreated})=>{
  const emailRef=useRef()
  const passwordRef=useRef()
  const provider=new GoogleAuthProvider()

   function handleSignup(){
     setIsPending(true)
      try{
         await signup(emailRef.current.value, passwordRef.current.value)
          setCreated(true)

       }
       catch(erro) {
          setIsValid(true) 
       {
       setIsPending(false)
     
  }
  const [isValid, setIsValid]=useState(false)
  const [isPending, setIsPending ]=useState(false)
  const [selectMethod, setSelectMethod]=useSta(true)

  return(
    <div className="container">
    {selectMethod && 
    <div>
       <GoogleButton onClick={handleGoogleSignIn} />
       <button onClick={()=>setSelectMethod(false)} >Signin with Email</button>
    </div>} 
    
      <div><p>Create EazyMart shopping account</p>
      <form onSubmit={handleSignup} id="sign-form">
        <label>Email</label>
        <FontAwesomeIcon icon={faEnvelope} className="sign-icons"/>
        <input ref={emailRef} type="email" placeholder="email@example.com"/>
        <label>Password</label>
        {isValid && <small>password less than 6 characters</small>}
       <FontAwesomeIcon icon={faLock} className ="sign-icons"/>
        <input ref={passwordRef} type="password" placeholder="password"  />
        <button style={{marginTop:'20px'}}>sign up {isPending && <>loading... </>} </button>
     </form>
     </div> 
    </div>
  )
}
export default Signup

import React,{useState, useRef} from 'react'
import {signup} from './firebase '
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import {GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth"
import {GoogleButton} from 'react-google-button' 

const Signup=({setCreated})=>{
  const emailRef=useRef()
  const passwordRef=useRef()
  const auth=getAuth() 

  const provider=new GoogleAuthProvider() 
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
  const [isValid, setIsValid]=useState(false)
  const [isPending, setIsPending ]=useState(false)

  const handleGoogleSigIn=() =>{
     signInWithPopup(auth, provider) 
  } 

  return(
    <div className="container">
      {selectMethod && <div style={{width:'100%',background:'whitesmoke',border:'1px solid whitesmoke', borderRadius:'3px' } } >
          <GoogleButton onClick={handleGoogleSignIn} />
          <button onClick={() =>SetSelectMethod(false) } style={{background:'hsl(25,100,60%',border:'1px solid hsl(25,100,60%)',padding:'12px'}} >Sign In with Email</button>
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
        <button style={{marginTop:'20px'}}>sign up {isPending && <p>loading... </p>} </button>
     </form>
     </div> 
    </div>
  )
}
export default Signup

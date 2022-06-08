import React,{useState, useRef} from 'react'
import {auth,provider} from './firebase '
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import { createUserWithEmailAndPassword} from "firebase/auth"

const Signup=({setCreated})=>{
  const emailRef=useRef()
  const passwordRef=useRef()

   function handleSignup(){
     
       createUserWithEmailAndPassword(auth, provider, emailRef.current.value, passwordRef.current.value). then(()=>{
        setCreated(true)

       })
     
     catch{
       alert('error')
       setIsValid(true)
     }
     setTimeout(()=>{
       setIsPending()
     })
  }
  const [isValid, setIsValid]=useState(false)
  const [isPending, setIsPending ]=useState(false)

  return(
    <div className="container">
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
import React,{useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import {GoogleButton} from 'react-google-button'
import {signup, googleSignin} from './firebase'
import {onAuthStateChanged, getAuth} from 'firebase/auth'


const Signup=({setCreated})=>{
  
  const emailRef=useRef()
  const passwordRef=useRef()

  const [isPasswordValid, setIsPasswordValid]=useState(false)
  const [isPending, setIsPending ]=useState(false)
  const [selectMethod, setSelectMethod] =useState(true) 

  const handleEmailSignup=async()=>{
       setIsPending(true) 
       try{
           const user=await signup(emailRef.current.value, passwordRef.current.value )
           setCreated(true)
       }
       catch(error) {
         console.log(error.message)
       }
       setIsPending(false) 
     
  }

  /*checking if user was currently logged in*/
  const auth=getAuth()
  const [user, setUser] =useState({})
  onAuthStateChanged(auth, (currentUser)=>{
     setUser(currentUser)
  })
  
  const handleGoogleSignIn=async()=>{
     try{  
         const user=await googleSignin()
         console.log("logged in successfully :) ")
         setCreated(true)
          
      }
      catch(error){
          console.log(error.message)
      }
   }
   
   
  return(
    <div className="container">

     {selectMethod &&
      <div className="method-selection" >
        <h3>{user ?.Email} </h3>
        <GoogleButton onClick={handleGoogleSignIn} className="google-btn"/>
        <button onClick={() =>setSelectMethod(false) }>Sign in with Email</button>
         
        {user.Email && 
         <img src={user.photoURL} />} 
      </div>
     } 
    
      
      <div>
      <p>Create EazyMart shopping account</p>
      <form onSubmit={handleEmailSignup} id="sign-form">
        <label>Email</label>
        <FontAwesomeIcon icon={faEnvelope} className="sign-icons"/>
        <input ref={emailRef} type="email" placeholder="email@example.com"/>
        <label>Password</label>
        {isPasswordValid &&
        <small>{error.message}</small>}
       <FontAwesomeIcon icon={faLock} className ="sign-icons"/>
        <input ref={passwordRef} type="password" placeholder="password"  />
        <button style={{marginTop:'20px'}}> {isPending ? <>loading... </> : <>signup</>} </button>
     </form>
     </div> 
       
    </div>
  )
}
export default Signup

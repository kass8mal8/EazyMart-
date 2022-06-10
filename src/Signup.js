import React,{useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import {GoogleButton} from 'react-google-button'
import {auth} from './firebase'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged} from 'firebase/auth'


const Signup=({setCreated})=>{
  
  const emailRef=useRef()
  const passwordRef=useRef()

  const [isPasswordValid, setIsPasswordValid]=useState(false)
  const [isPending, setIsPending ]=useState(false)
  const [selectMethod, setSelectMethod] =useState(true) 

  const handleEmailSignup=async()=>{
       setIsPending(true) 
       try{
          const user=await createUserWithEmailAndPassword (auth,emailRef.current.value, passwordRef.current.value )
           setCreated(true)
       }
       catch(error) {
         console.log(error.message)
       }
       setIsPending(false) 
     
  }

  /*checking if user is currently logged in*/
  const [user, setUser] =useState({})
  onAuthStateChanged(auth, (currentUser)=>{
     setUser(currentUser)
  })
  
  
  const handleGoogleSignIn=async()=>{
    const provider=new GoogleAuthProvider()
     try{  
        const user=await signInWithPopup(auth, provider)
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
        {user &&
        <div>
           <h3>Email address:{user.Email} </h3>
           <p>Name:{user.displayName} </p>
           <img src={user.photoURL} className="avatar" style={{width:'27px', height:'27px', zIndex:'2'}} />
        </div>} 
        <GoogleButton onClick={handleGoogleSignIn} className="google-btn"/>
        <button onClick={() =>setSelectMethod(false) }>Sign in with Email
        </button>
      </div>
     } 
     
      <div>
      {/*signup form*/} 
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

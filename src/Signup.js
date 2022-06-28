import React,{useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import {GoogleButton} from 'react-google-button'
import {auth} from './firebase'
import { 
   createUserWithEmailAndPassword,
   signInWithPopup, 
   GoogleAuthProvider, 
   onAuthStateChanged} 
from 'firebase/auth'
import {useNavigate, Link} from 'react-router-dom'


const Signup=({user, setIsAccountCreated })=>{
  
  const emailRef=useRef()
  const passwordRef=useRef()

  const [isPasswordValid, setIsPasswordValid]=useState(false)
  const [isPending, setIsPending ]=useState(false)
  const [selectMethod, setSelectMethod] =useState(true) 

  const navigate=useNavigate()
  
  const handleEmailSignup=async()=>{
       setIsPending(true) 
       try{
          const user=await createUserWithEmailAndPassword (auth,emailRef.current.value, passwordRef.current.value )
             navigate('/products')
             setIsAccountCreated(true)
       }
       catch(error) {
         console.log(error.message)
       }
       setIsPending(false) 
     
  }
  
  const handleGoogleSignIn=async()=>{
     const provider=new GoogleAuthProvider()
     setIsPending(true)
     try{  
        const user=await signInWithPopup(auth, provider)
         navigate('/products')
         setIsAccountCreated(true)
      }
      catch(error){
          console.log(error.message)
      }
      setIsPending(false)
   }
   
  return(
    <div className="container">
    
      {isPending && 
         <div className='spinner'>
            <p className='p1'></p>
            <p className='p2'></p>
            <p className='p3'>loading...</p>
         </div>
      } 

      {selectMethod &&
         <div className="method-selection" >
           <GoogleButton 
               onClick={handleGoogleSignIn} 
               className="google-btn"/>
           <button 
               onClick={() =>setSelectMethod(false)}>
               Sign in with Email
           </button>
         </div>
     } 
     
      <div>
      <p>Create EazyMart shopping account</p>
      
      <form
         onSubmit={handleEmailSignup} 
         id="sign-form">
        <label>Email</label>
        <FontAwesomeIcon 
            icon={faEnvelope} 
            className="sign-icons">
        </FontAwesomeIcon>
        <input 
            ref={emailRef}
            type="email"
            placeholder="email@example.com"/>
        <label>Password</label>
        
        {isPasswordValid &&
            <small className="error-message" >
               {error.message}
            </small>
        }
       <FontAwesomeIcon 
            icon={faLock} 
            className ="sign-icons">
       </FontAwesomeIcon>
        <input
            ref={passwordRef}
            type="password" 
            placeholder="password"  />
        <button 
            style={{marginTop:'20px'}}> 
            signin
        </button>
        <p className='consent'>
        <input type='radio' />
            By creating an account,I consent to EazyMart <Link to='#'>terms of service</Link> and abide by them.
        </p>
     </form>
     </div>
       
    </div>
  )
}
export default Signup

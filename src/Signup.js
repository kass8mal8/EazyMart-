import React,{useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import {GoogleButton} from 'react-google-button'

/*firebase authentication */
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const Signup=({setCreated})=>{
  
   // Your web app's Firebase configuration
   const firebaseConfig = {
       apiKey: "AIzaSyCIMC-BGvBeO4VUg7DbPJq-F0Z_z87LyAM",
       authDomain: "eazy-mart-auth.firebaseapp.com",
       projectId: "eazy-mart-auth",
       storageBucket: "eazy-mart-auth.appspot.com",
       messagingSenderId: "749499150162",
       appId: "1:749499150162:web:f49130694ac44b3c40948b"
   };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth=getAuth()
  const provider=new GoogleAuthProvider()
  
  const emailRef=useRef()
  const passwordRef=useRef()

  const [isValid, setIsValid]=useState(false)
  const [isPending, setIsPending ]=useState(false)
 
 
  const [selectMethod, setSelectMethod] =useState(true) 

  const handleSignup=()=>{
       setIsPending(true) 
       
       createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
       .then(()=>{
           console.log("logged in successfully :) ");
            setCreated(true)
       })
       .catch((error)=>{
           console.log(error.message);
       })
       setIsPending(false)
     
  }
  
  
  const handleGoogleSignIn=()=>{
      signInWithPopup(auth, provider)
      .then(()=>{
          console.log("logged in successfully :) ")
          setCreated(true)
      })
      .catch((error)=>{
          console.log(error.message)
      })
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

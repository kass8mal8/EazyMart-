import React,{usestate, useRef} from 'react' 
import {signup} from './firebase '

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
  return(
    <div className="container">
      <div><p>Create EazyMart shopping account</p></div>
      <form onSubmit={handleSignup}>
        <label>Email</label>
        <input ref={emailRef} type="email" placeholder="email@example.com"/>
        <label>Password</label>
        <input ref={passwordRef} type="password" placeholder="password"/>
        <button style={{marginTop:'20px'}}>signup</button>
     </form>
    </div>
  )
}
export default Signup
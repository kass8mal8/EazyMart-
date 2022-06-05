import React,{usestate, useRef} from 'react' 
import {signup} from './firebase '

const Signup=()=>{
  const emailRef=useRef()
  const passwordRef=useRef()

  async function handleSignup(){
    await signup(ema)
  }
  return(
    <div className="container">
      <form>
        <label>Email</label>
        <input ref={emailRef} type="email"/>
        <label>Password</label>
        <input ref={passwordRef} type="password"/>
        <button >signup</button>
     </form>
    </div>
  )
}
export default Signup
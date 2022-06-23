import React, { useState } from "react"
import {useNavigate} from 'react-router-dom'
import Smartphones from "./Smartphones "
import HomeAccessories from "./HomeAccessories "
import Clothes from './Clothes'
import Foodstuff from './Foodstuff  '

const Mainproducts = ( {isAccountCreated} ) => {

   const [isShown, setIsShown] = useState(true)
   const [count, setCount] = useState(0)
   const navigate=useNavigate()
   
   return (
      <div className="container">
        
      {/*Start of cart content display */}        
      <div className="cart-content">
         <div 
            style={{
               borderBottom:'2px solid #ccc',
               fontWeight:'bold', 
               color:'gray'
            }}>
                <p>Cart</p>
            </div>
         {count < 1 ?
         <p style={{
            color:'gray',
            textAlign:'center',
            marginTop:'22%'}}>
            You have no items in your cart
         </p> :
         <div>
            <p>
               You have {count} items in your cart
            </p>
            <button 
            style={{
              background:'hsl(25,100%,60%)',
              border:'1px solid hsl(25,100%,60%)',
              width:'100%',
              marginTop:'15%',
              padding:'10px',
              fontFamily:'kumbh sans',
              borderRadius:'2px'
            }} 
            onClick={()=>{
               user && isAccountCreated
               ? navigate('/checkout')
               : navigate('/signup')}
            }>
              proceed to checkout
            </button>
         </div>}
      </div>
      {/*End of cart content display */} 
         
      {count > 0  &&
          <small className="badge-counter"> {count} 
          </small>
      }
      
       <section>
         <p>Best shopping experience </p>
         <p>Discounts up to 50% off</p>
       </section>
       
       <Clothes 
            count={count} 
            setCount={setCount} 
            isShown={isShown} 
            setIsShown={setIsShown}/>
       <Smartphones 
            count={count} 
            setCount={setCount} 
            isShown={isShown} 
            setIsShown={setIsShown}/>

       <Foodstuff 
            count={count}  
            setCount ={setCount} 
            isShown={isShown} 
            setIsShown={setIsShown}/>

       <HomeAccessories 
            count={count} 
            setCount={setCount} 
            isShown={isShown} 
            setIsShown={setIsShown}/>
    </div>
   )
}
export default Mainproducts

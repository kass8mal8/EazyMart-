import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import Smartphones from "./Smartphones "
import HomeAccessories from "./HomeAccessories "
import Clothes from './Clothes'
import Foodstuff from './Foodstuff'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Mainproducts = ({ isAccountCreated, user }) => {

   const [isShown, setIsShown] = useState(true)
   const [count, setCount] = useState(0)
   const navigate = useNavigate()

   const handleCheckOut = () => {
      user || isAccountCreated ?
         navigate('/checkout') : navigate('/signup')
   }

   const imgSrc = "https://pngimg.com/uploads/jacket/jacket_PNG8057.png"
   const src = "https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Suit-PNG-Transparent-Image-250x300.png"

   const image = [
      { src: "https://pngimg.com/uploads/jacket/jacket_PNG8057.png", id: 1, price:499},
      { src: "https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Suit-PNG-Transparent-Image-250x300.png", id: 2,price:1599 }
   ]

   const handleDelete =(id)=>{
      image.filter(Image=>Image.id !== id)
   }

   return (
      <div className="container">
        
      {count > 0  &&
         <small className="badge-counter"> 
            {count} 
         </small>
      }
      
        
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
            {/*checking if count is one to display a single image */}
            {count == 1
             ?<div style={{
                display:'grid', 
                gridTemplateColumns:'70% 30%', 
                gap:'10px', 
                justifyContent:'center', 
                marginTop:'15px', 
                marginLeft:'10px'
             }}>
             <img src={imgSrc} width='60' 
               style={{
                  background:'whitesmoke', 
                  padding:'5px', 
                  borderRadius:'3px'
               }}/>
               <aside>
                <FontAwesomeIcon icon={faTrashCan} style={{
                   opacity:'60%',
                }}/>
                <p>ksh 499</p>
              </aside>
             </div>
            : 
            <div>
            {image.map(img=>(
               <div className='aside-content' key={img.id}>
                <aside>
                  <img src={img.src} />
                </aside>
                <nav>
                  <FontAwesomeIcon 
                     icon={faTrashCan} style={{
                      opacity:'60%', 
                   }}
                   onClick={()=>handleDelete(img.id)}/>
                     <p>{img.price}</p>
                </nav>
               </div> )
            )}
            </div>
            } 
            
            <button 
            style={{
              background:'hsl(25,100%,60%)',
              border:'1px solid hsl(25,100%,60%)' ,
              width:'100%',
              marginTop:'15px' ,
              padding:'10px',
              fontFamily:'kumbh sans',
              borderRadius:'2px'
            }} 
            onClick={handleCheckOut} >
              proceed to checkout
            </button>
         </div>}
      </div>
      {/*End of cart content display */} 
         
      
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

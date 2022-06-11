import React from 'react'
import {Link} from 'react-router-dom'

const Foodstuff =({count, setCount,isShown,setIsShown})=>{
const foods=
     [{src:"https://megawholesalers.co.ke/images/stories/virtuemart/product/PACK-EXE-All-Purpose-e1429515425104.png", 
      name:"Exe Flour",
      price:140,
      id:1},
      
      {src:"https://unga-group.com/wp-content/uploads/2019/06/Jogoo-1-300x232.png",
      name:"Jogoo Unga",
      price:150, 
      id:2},
      
      {src:"https://mybigorder.com/public/uploads/products/thumbnail/bUF9ShhoBlBqUTGOtipyj8TWFMydTxVQUggMzsXx.png", 
      name:"Taifa ngano",
      price:200, 
      id:3},
      
      {src:"https://giantmillers.co.ke/wp-content/uploads/2020/03/canna_maize_meal.png",
      name:"Canna maize",
      price:250,
      id:4},]
      
const image="https://cdn.shopify.com/s/files/1/1144/7088/files/RUSEEN_Reflective_Apparel-Reflective_Shirt-Unisex-Polyester-Birdseye_Knit-Orange-Long_Sleeve-Reflective_Running_Gear-Reflective_Clothing-Blank-Front.png?1469418611344383116"

const handleCount =()=>{
   setCount (count+1)
}

const handleShown=()=>{
   setIsShown(false)
   let prod=document.getElementById('prod')

   document.getElementById('product-image')
   .src=prod.getAttribute('src')
}


  return(
    <div className ="container">
      {isShown ?
      <div>
        <h3>Foodstuff </h3>
      <div className ="foods">
      {foods.map(food=>(
      <div key={food.id}>
         <img src={food.src} alt=""
            onClick={handleShown} id="prod"/>
         <p>{food.name}
             <br/>ksh {food.price}
         </p>
         <button 
            onClick ={()=>setCount(count+1)}>
            add to cart
         </button>
      </div>
      ))}
      </div>
      </div> :
            <div className="product-info">
               <img src={image} width="200" 
               id="product-image"/>
            </div>}
      </div>
  )
}
export default Foodstuff

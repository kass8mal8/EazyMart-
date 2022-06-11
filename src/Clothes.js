import React, {Link} from 'react'

const Clothes=({count,setCount})=>{
  
  const images=
    [{src:"https://pngimg.com/uploads/jacket/jacket_PNG8057.png",
     name:"Polo Jacket",
     price:499, 
     id:1 },
     
    {src:"https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Suit-PNG-Transparent-Image-250x300.png", 
    name:"Men's official",
    price:1599,
    id:2}, 
    
    {src:"https://cdn.shopify.com/s/files/1/1144/7088/files/RUSEEN_Reflective_Apparel-Reflective_Shirt-Unisex-Polyester-Birdseye_Knit-Orange-Long_Sleeve-Reflective_Running_Gear-Reflective_Clothing-Blank-Front.png?1469418611344383116", 
    name:"Long sleeve shirt",
    price:250, 
    id:3}, 
    
    {src:"https://pluspng.com/img-png/clothes-png-hd-dress-shirt-png-hd-png-image-480.png",
    name:"Shirt",
    price:99,
    id:4} ]
  return(
    <div>
          <h3>Clothes</h3>

    <div className="clothes-container">
      {images.map(image=>(
      <div key={image.id}>
         <img src={image.src} />
      
         <p> {image.name} 
             <br/>ksh {image.price}
         </p>

         <button onClick={()=>setCount(count+1)}>
               add to cart
         </button>
      </div>
      )) }
    </div>
    </div>
  )
}
export default Clothes

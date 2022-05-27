import React from 'react'

const Home=()=>{
  const image="https://purepng.com/public/uploads/large/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326975ia8xr.png"
  return(
    <div className="home-container">
       <div class="announcement">
         <p>Free shipping on all goods above ksh 20,000</p>
       </div>
       <div className="slider">
          <img src={image} />
       </div > 
       <div className="intro-paragraph">
       <p>We have a variety of products on sale for every person,at EazyMart prices are affordable so that nothing ruins your preferences.<br/> Glad to have you shop with us. 
       </p>
         
       </div>
    </div>
  )
}
export default Home
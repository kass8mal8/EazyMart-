import React from 'react'

const Home=()=>{
  const image="https://clipground.com/images/clothes-png-for-picsart-5.png"
  return(
    <div className="home-container">
       <div class="announcement">
         <p>Free shipping on all goods above ksh 20,000</p>
       </div>
       <div className="slider">
          <img src={image} />
       </div > 
       <div>
       <p>We have a variety of products on sale for every person,at EazyMart prices are affordable so that nothing ruins your preferences.<br/> Glad to have you shop with us. 
       </p>
         
       </div>
    </div>
  )
}
export default Home
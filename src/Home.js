import React from 'react'
import {Link} from 'react-router-dom'

const Home=()=>{
  const image1="https://purepng.com/public/uploads/large/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326975ia8xr.png"

  const image2="https://freepngimg.com/thumb/shoes/27496-2-female-shoes.png"

  const image3="https://pngimg.com/uploads/jacket/jacket_PNG8057.png"

  const image4="https://www.pakmobizone.pk/wp-content/uploads/2020/03/TECNO-Camon-15-Pro-33.png"
  return(
    <div className="home-container">
       <div class="announcement">
         <p>Free shipping on all goods above ksh 20,000 ! </p>
       </div>
       <div className="slider">
          <img src={image1} />
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
       </div > 
       <div className="intro-paragraph">
       <p>We have a variety of products on sale for every person,at EazyMart prices are affordable so that nothing gets your way.<br/> Glad to have you shop with us,we never disappoint.  
       </p>     
       </div>
       <div className="shopping-btn">
         <Link to="/products" ><button>start shopping</button></Link>
       </div>
    </div>
  )
}
export default Home
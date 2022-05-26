import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faClose } from '@fortawesome/free-solid-svg-icons' 


const Smartphones=()=>{
    
    const Iphone ="https://www.vodafone.co.uk/en/assets/images/desktop/Apple_iPhone_12_blue-full-product-front-600.png"
    const Huawei="https://androidgreek.com/wp-content/uploads/2021/05/Techno.png"
    
    const Hot10="https://www.pakmobizone.pk/wp-content/uploads/2020/03/TECNO-Camon-15-Pro-33.png"
  
    const zero8="https://www.pakmobizone.pk/wp-content/uploads/2020/11/Infinix-Zero-8-Green-Diamond-1.jpg"

  const handleClick=(e)=>{
      document.querySelector('.product-page').classList.toggle('visible')
      document.querySelector('.product-page img').src=e
     document.querySelector('.smartphones ').classList.toggle('hidden')
  }
  const handleClose=()=>{
    document.querySelector('.smartphones ').classList.toggle('hidden')
    document.querySelector('.product-page').classList.toggle('visible')
     
  }
  const image="https://www.pakmobizone.pk/wp-content/uploads/2020/09/infinix-Hot-10-Ocean-Wave-5.jpg"
    

  return (
    <div className="smartphones-container">
      <h3>Smartphones</h3>
      <div className="smartphones">
      <div >
       <img src={Iphone} width="" onClick={() =>handleClick(Iphone)} /> 
       <p>Iphone 12 
       <br/>ksh 17000</p>
       <button>add to cart</button>
      </div>
      <div>
        <img src={Huawei} width="200" onClick={()=>handleClick(Huawei) } />
        <p>Camon 17
        <br/>ksh 16549</p>
        <button>add to cart</button>
      </div>
      <div>
        <img src={Hot10} onClick={()=>handleClick(Hot10)} />
      <p>Camon 15 pro<br/>ksh 8999</p>
      <button>add to cart</button>
      </div>
      <div>
         <img src={zero8} onClick={() =>handleClick(zero8)} />
        <p>Infinix 08 <br/>ksh 9499</p>
       <button>add to cart</button>
      </div>
      </div>

        <div className="product-page">
          <FontAwesomeIcon icon={faClose} onClick={handleClose} id="product-close"></FontAwesomeIcon>
          <img src={image} />
        </div>
    </div>
  )
}
export default Smartphones 
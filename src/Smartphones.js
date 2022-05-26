import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faClose } from '@fortawesome/free-solid-svg-icons' 


const Smartphones=()=>{
    
    const Iphone ="https://d30skdkspqmhrr.cloudfront.net/3VEa.jpg"
    const Huawei="https://acabuy.com/wp-content/uploads/2020/08/Huawei-P40-Pro.jpg "
    
    const Hot10="https://www.pakmobizone.pk/wp-content/uploads/2020/09/infinix-Hot-10-Ocean-Wave-5.jpg"
  
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
      </div>
      <div>
        <img src={Huawei} width="200" onClick={()=>handleClick(Huawei) } />
        <p>Huawei P40 Pro
        <br/>ksh 16549</p>
      </div>
      <div>
        <img src={Hot10} onClick={()=>handleClick(Hot10)} />
        <p>Infinix Hot 10<br/>ksh 8999</p>
      </div>
      <div>
         <img src={zero8} onClick={() =>handleClick(zero8)} />
        <p>Infinix 08 <br/>ksh 9499</p>
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
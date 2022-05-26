import React from 'react'

const Smartphones=()=>{
  const smartphone =[
    
  ] 

    const Iphone ="https://d30skdkspqmhrr.cloudfront.net/3VEa.jpg"
    const Huawei="https://acabuy.com/wp-content/uploads/2020/08/Huawei-P40-Pro.jpg "
    
    const Hot10="https://www.pakmobizone.pk/wp-content/uploads/2020/09/infinix-Hot-10-Ocean-Wave-5.jpg"
  
    const zero8="https://www.pakmobizone.pk/wp-content/uploads/2020/11/Infinix-Zero-8-Green-Diamond-1.jpg"

  const handleClick=()=>{
    document.querySelector('.product-page').style.display="block"
    document.querySelector('.product-page').src=document.getAttribute(src)

  }
  const image="https://www.pakmobizone.pk/wp-content/uploads/2020/09/infinix-Hot-10-Ocean-Wave-5.jpg"

  return (
    <div className="smartphones-container">
      <h3>Smartphones</h3>
      <div className="smartphones">
      <div className="smartphone-image">
       <img src={Iphone} width="" onClick={handleClick} /> 
       <h5>IPhone 12 
       <br/>ksh 17000</h5>
      </div>
      <div>
        <img src={Huawei} width="200" onClick={handleClick} />
        <h5>Huawei P40 Pro
        <br/>ksh 16549</h5>
      </div>
      <div>
        <img src={Hot10} onClick={handleClick} />
        <h5>Infinix Hot 10<br/>ksh 8999</h5>
      </div>
      <div>
         <img src={zero8} onClick={handleClick} />
        <h5>Infinix 08 <br/>ksh 9499</h5>
      </div>
      </div>

        <div className="product-page">
          <img src={image} />
        </div>
    </div>
  )
}
export default Smartphones 
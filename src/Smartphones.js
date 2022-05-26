import React from 'react'
import {Link} from 'react-router-dom'

const Smartphones=()=>{
  const smartphone =[
    
  ] 

    const Iphone ="https://d30skdkspqmhrr.cloudfront.net/3VEa.jpg"
    const Huawei="https://acabuy.com/wp-content/uploads/2020/08/Huawei-P40-Pro.jpg "
    
    const Hot10="https://www.pakmobizone.pk/wp-content/uploads/2020/09/infinix-Hot-10-Ocean-Wave-5.jpg"
  
    const zero8="https://www.pakmobizone.pk/wp-content/uploads/2020/11/Infinix-Zero-8-Green-Diamond-1.jpg"


  return (
    <div className="smartphones-container">
      <h3>Smartphones</h3>
      <div className="smartphones">
      <div>
       <Link to="/product"><img src={Iphone} width=""/> </Link>
       <h5>IPhone 12 
       <br/>ksh 17000</h5>
      </div>
      <div>
        <img src={Huawei} width="200" />
        <h5>Huawei P40 Pro
        <br/>ksh 16549</h5>
      </div>
      <div>
        <img src={Hot10} alt=""/>
        <h5>Infinix Hot 10<br/>ksh 8999</h5>
      </div>
      <div>
        <img src={zero8}/>
        <h5>Infinix 08 <br/>ksh 9499</h5>
      </div>
      </div>
    </div>
  )
}
export default Smartphones 
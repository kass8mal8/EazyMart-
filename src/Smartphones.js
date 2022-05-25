import React from 'react'

const Smartphones=()=>{
  const smartphone =[
    {src:"https://www.pakmobizone.pk/wp-content/uploads/2020/11/Infinix-Zero-8-Green-Diamond-1.jpg",name:"Infinix Zero 8",price:10200,id:1 }, 
    {src:"https://www.pakmobizone.pk/wp-content/uploads/2020/09/infinix-Hot-10-Ocean-Wave-5.jpg",name:"Infinix Hot 10",price:8999,id:2}, 
    
  ] 

    const Iphone ="https://d30skdkspqmhrr.cloudfront.net/3VEa.jpg"
    const Huawei="https://acabuy.com/wp-content/uploads/2020/08/Huawei-P40-Pro.jpg "
    

  return (
    <div className="smartphones">
      <div>
       <img src={Iphone} width="170"/>
       <h5>IPhone 12</h5>
      </div>
      <div>
        <img src={Huawei} width="170" />
        <h5>Huawei P40 Pro</h5>
      </div>
    </div>
  )
}
export default Smartphones 
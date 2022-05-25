import React from 'react'

const Smartphones=()=>{
  const smartphone =[
    {src:"https://www.pakmobizone.pk/wp-content/uploads/2020/11/Infinix-Zero-8-Green-Diamond-1.jpg",name:"Infinix Zero 8",price:10200,id:1 }, 
    {src:"https://www.pakmobizone.pk/wp-content/uploads/2020/09/infinix-Hot-10-Ocean-Wave-5.jpg",name:"Infinix Hot 10",price:8999,id:2}, 
    {src:"https://acabuy.com/wp-content/uploads/2020/08/Huawei-P40-Pro.jpg ", name:"Huawei P40 pro",price:11100,id:3},
    
  ] 
 
    const Iphone ="https://d30skdkspqmhrr.cloudfront.net/3VEa.jpg"
    

  return (
    <div className="smartphones">
       <img src={Iphone} width="170"/>
       <h5>IPhone 12</h5>

    </div>
  )
}
export default Smartphones 
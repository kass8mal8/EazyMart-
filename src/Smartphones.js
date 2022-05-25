import React from 'react'
import SmartphonesList from "./SmartphonesList"

const Smartphones=()=>{
  const smartphone =[
    {src:"https://www.pakmobizone.pk/wp-content/uploads/2020/11/Infinix-Zero-8-Green-Diamond-1.jpg",name:"Infinix Zero 8",price:10200,id:1 }, 
    {src:"https://www.pakmobizone.pk/wp-content/uploads/2020/09/infinix-Hot-10-Ocean-Wave-5.jpg",name:"Infinix Hot 10",price:8999,id:2}, 
    {src:"https://acabuy.com/wp-content/uploads/2020/08/Huawei-P40-Pro.jpg ", name:"Huawei P40 pro",price:11100,id:3},
    {src:"https://d30skdkspqmhrr.cloudfront.net/3VEa.jpg",name:"IPhone 12",price:17000,id:4}
    
  ] 
  const smart=[
    {name:"Infinix zero 8",price:10200,id:1},
    {name:"Infinix Hot 10",price:8999,id:2},
    {name:"Huawei P40 Pro",price:11100,id:3},
    {name:"IPhone 12",price:17000,id:4},


  ]
  return (
    <div className="smartphones">
        <SmartphonesList smartphone={smartphone} smart={smart} />
    </div>
  )
}
export default Smartphones 
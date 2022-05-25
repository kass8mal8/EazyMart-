import React from 'react'
import SmartphonesList from "./SmartphonesList"

const Smartphones=()=>{
  const smartphone =[
    {src:"https://www.pakmobizone.pk/wp-content/uploads/2020/11/Infinix-Zero-8-Green-Diamond-1.jpg",name:"Infinix Zero 8",price:10200,id:1 }, 
    {src:"https://www.pakmobizone.pk/wp-content/uploads/2020/09/infinix-Hot-10-Ocean-Wave-5.jpg",name:"Infinix Hot 10",price:8999,id:2}
    
  ] 
  return (
    <div className="smartphones">
        <SmartphonesList smartphone={smartphone}/>
    </div>
  )
}
export default Smartphones 
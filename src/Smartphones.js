import React from 'react'
import SmartphonesList from "./SmartphonesList"

const Smartphones=()=>{
  const smartphone =[
    {src:"https://www.pakmobizone.pk/wp-content/uploads/2020/11/Infinix-Zero-8-Green-Diamond-1.jpg",name:"Infinix 08",price:10200,id:1 }
    
  ] 
  return (
    <div className="smartphones">
        <SmartphonesList smartphone={smartphone}/>
    </div>
  )
}
export default Smartphones 
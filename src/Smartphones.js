import React from 'react'
import SmartphonesList from "./SmartphonesList"

const Smartphones=()=>{
  const smartphone =[
    {src:"https://www.stephanis.com.cy/media/products/HUA.00193.jpg",name:"Huawei",price:10200,id:1 }
    
  ] 
  return (
    <div className="smartphones">
        <SmartphonesList smartphone={smartphone}/>
    </div>
  )
}
export default Smartphones 
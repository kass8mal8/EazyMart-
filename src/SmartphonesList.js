import React from 'react'

const SmartphonesList =({smartphone,smart})=>{
  return(
    <div>
      {smartphone.map(smartphone=>
        (<div className="smartphone-product" key={smartphone.id}>
          <img src={smartphone.src} width="170" className="smart-img"/>
          <h4>{smartphone.name} <br />Ksh {smartphone.price} </h4>
        
        </div>)
        )}
    </div>
  )
}
export default SmartphonesList
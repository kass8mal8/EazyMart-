import React from 'react'

const SmartphonesList =({smartphone})=>{
  return(
    <div>
      {smartphone.map(smartphone=>
        (<div className="smartphone-product">
          <h3>Smartphones</h3>
          <img src={smartphone.src} width="170" />
          <h4>{smartphone.name} </h4>
        </div>)
        )}
    </div>
  )
}
export default SmartphonesList
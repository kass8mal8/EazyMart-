import React from 'react'

const SmartphonesList =({smartphone})=>{
  return(
    <div>
      {smartphone.map(smartphone=>
        (<div className="smartphone-product">
          <img src={smartphone.src} width="170" />
          <h5>{smartphone.name} </h5>
        </div>)
        )}
    </div>
  )
}
export default SmartphonesList
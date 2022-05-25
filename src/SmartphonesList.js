import React from 'react'

const SmartphonesList =({smartphone})=>{
  return(
    <div>
      {smartphone.map(smartphone=>
        (<div className="smartphone-product" key={smartphone.id}>
          <img src={smartphone.src} width="170" />
          <h4>{smartphone.name} </h4>
        </div>)
        )}
    </div>
  )
}
export default SmartphonesList
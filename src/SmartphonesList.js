import React from 'react'

const SmartphonesList =({smartphone})=>{
  return(
    <div>
      {smartphone.map(smartphone=>
        (<div>
          <img src={smartphone.src} width="200" />
          <h5>{smartphone.name} </h5>
        </div>)
        )}
    </div>
  )
}
export default SmartphonesList
import React from 'react'

const SmartphonesList =({smartphone})=>{
  return(
    <div>
      {smartphone.map(smartphone=>
        (<div>
          <img src={smartphone.src} />
          
        </div>)
        )}
    </div>
  )
}
export default SmartphonesList
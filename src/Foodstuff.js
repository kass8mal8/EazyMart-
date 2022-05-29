import React from 'react'

const Foodstuff =()=>{

  return(
    <div className ="container">
      {foods.map(food=>(
        <div className ="foods-wrapper">
          <div>
            <img src={food.src} alt="" />
            <p>ksh {food.price} </p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Foodstuff
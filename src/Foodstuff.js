import React from 'react'

const Foodstuff =()=>{
const foods=[
  {src:"https://capwell.co.ke/wp-content/uploads/2020/03/pearl-pishori.png", name:"Pearl-pishori"}
]
  return(
    <div className ="container">
      <div>
      {foods.map(food=>(
        <div className ="foods">
            <img src={food.src} alt="" />
            <p>{food.name}<br/>sh {food.price} </p>
        </div>
        </div>

      ))}
    </div>
  )
}
export default Foodstuff
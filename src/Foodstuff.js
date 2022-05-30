import React from 'react'

const Foodstuff =()=>{
const foods=[
  {src:"https://capwell.co.ke/wp-content/uploads/2020/03/pearl-pishori.png", name:"Pearl-pishori", price:250, id:1},
  {src:"https://unga-group.com/wp-content/uploads/2019/06/Jogoo-1-300x232.png", name:"Jogoo Unga", price:150, id:2},
  {src:"https://mybigorder.com/public/uploads/products/thumbnail/bUF9ShhoBlBqUTGOtipyj8TWFMydTxVQUggMzsXx.png", name:"Taifa ngano", price:200, id:3},
  {src:"https://giantmillers.co.ke/wp-content/uploads/2020/03/canna_maize_meal.png", name:"Canna maize", price:250, id:3},

]
  return(
    <div className ="container">
    <div className ="foods">

      {foods.map(food=>(
      <div>

            <img src={food.src} alt="" />
            <p>{food.name}<br/>ksh {food.price} </p>
        </div>
      ))}
      </div>

    </div>
  )
}
export default Foodstuff
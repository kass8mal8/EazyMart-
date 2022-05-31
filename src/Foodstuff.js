import React from 'react'

const Foodstuff =({count, set})=>{
const foods=[
  {src:"https://megawholesalers.co.ke/images/stories/virtuemart/product/PACK-EXE-All-Purpose-e1429515425104.png", name:"Exe Flour", price:140, id:1},
  {src:"https://unga-group.com/wp-content/uploads/2019/06/Jogoo-1-300x232.png", name:"Jogoo Unga", price:150, id:2},
  {src:"https://mybigorder.com/public/uploads/products/thumbnail/bUF9ShhoBlBqUTGOtipyj8TWFMydTxVQUggMzsXx.png", name:"Taifa ngano", price:200, id:3},
  {src:"https://giantmillers.co.ke/wp-content/uploads/2020/03/canna_maize_meal.png", name:"Canna maize", price:250, id:3},

]
const handleCount =()=>{
  setCount (count+1)

}
  return(
    <div className ="container">
      <h3>Foodstuff </h3>
    <div className ="foods">
      {foods.map(food=>(
      <div key={food.id}>
            <img src={food.src} alt="" />
            <p>{food.name}<br/>ksh {food.price} </p>
            <button onClick ={handleCount }>add to cart</button>
        </div>
      ))}
      </div>

    </div>
  )
}
export default Foodstuff
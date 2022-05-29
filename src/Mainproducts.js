import React, {useState} from "react"
import Smartphones from "./Smartphones "
import HomeAccessories from "./HomeAccessories "
import Clothes from './Clothes'
import Foodstuff from './Foodstuff  '

const Mainproducts=()=>{
  const [count, setCount]=useState(0)
  return(
    <div className="container">
      <small>{count}</small>
       <section>
         
         <p>Shopping experience like no other and with bigger offers than never.Enjoy our products at discounted prices.</p>
       </section>
       <Foodstuff />
       <Smartphones count={count} setCount={setCount} />
       <Clothes count={count} setCount={setCount} />
       <HomeAccessories count={count} setCount={setCount} />

    </div>   
  )
}
export default Mainproducts
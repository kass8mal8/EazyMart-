import React, {useState} from "react"
import Smartphones from "./Smartphones "
import HomeAccessories from "./HomeAccessories "
import Clothes from './Clothes'

const Mainproducts=()=>{
  const [count, setCount]=useState(0)
  return(
    <div className="container">
      <small>{count}</small>
       <section>
         <p>Shopping experience like no other and with bigger offers than never.Enjoy our products at discounted prices.</p>
       </section>
       <Smartphones count={count} setCount={setCount} />
       <HomeAccessories count={count} setCount={setCount} />
         <Clothes />

    </div>   
  )
}
export default Mainproducts
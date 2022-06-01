import React, {useState} from "react"
import Smartphones from "./Smartphones "
import HomeAccessories from "./HomeAccessories "
import Clothes from './Clothes'
import Foodstuff from './Foodstuff  '

const Mainproducts=()=>{
  const [count, setCount]=useState(0)
  const [isShown,setIsShown]=useState(false)
  return(
    <div className="container">
      <small>{count}</small>
       <section>
         
         <p>Shopping experience like no other and with bigger offers than never.Enjoy our products at discounted prices.</p>
       </section>
       <Foodstuff count={count}  setCount ={setCount} />
       <Smartphones count={count} setCount={setCount} isShown={isShown} setIsShown={setIsShown}/>
       <Clothes count={count} setCount={setCount} isShown={isShown} setIsShown={setIsShown}/>
       <HomeAccessories count={count} setCount={setCount} isShown/>
    </div>   
  )
}
export default Mainproducts
import React, {useState} from "react"
import Smartphones from "./Smartphones "
import HomeAccessories from "./HomeAccessories "


const Mainproducts=()=>{
  const [count, setCount]=useState(0)
  return(
    <div className="container">
      <small>{count}</small>
       <Smartphones count={count} setCount={setCount} />
       <HomeAccessories />
    </div>   
  )
}
export default Mainproducts
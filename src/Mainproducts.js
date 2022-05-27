import React, {useState} from "react"
import Smartphones from "./Smartphones "
import HomeAccessories from "./HomeAccessories "


const Mainproducts=()=>{
  const [count, setCount]=useState(3)
  return(
    <div className="container">
      <p>{count}</p>
       <Smartphones count={count} setCount={setCount} />
       <HomeAccessories />
    </div>   
  )
}
export default Mainproducts
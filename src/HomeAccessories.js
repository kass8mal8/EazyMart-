import React from 'react'

const HomeAccessories=()=>{
  const blacksneaker="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/59/246303/1.jpg?7199"

  const image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/568724/1.jpg?6621"

  return (
    <div className="homestuff-wrapper">
      <h3>Home accessories and footwear</h3>
      <div className="homestuff">
        <div>
          <img src={blacksneaker} width=""/>
          <p>Black fashion sneakers <br/>ksh 999</p>
        </div>
        <div>
          <img src={image} />
          <p>White high profile...</p>
        </div>
      </div>  
    </div>
  )
}
export default HomeAccessories
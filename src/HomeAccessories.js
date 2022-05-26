import React from 'react'

const HomeAccessories=()=>{
  const blacksneaker="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/59/246303/1.jpg?7199"

  const whitesneaker="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/568724/1.jpg?6621"

  const  blacklady="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/44/055623/1.jpg?3283"
  return (
    <div className="homestuff-wrapper">
      <h3>Home accessories and footwear</h3>
      <div className="homestuff">
        <div>
          <img src={blacksneaker} width=""/>
          <p>Black fashion sneakers <br/>ksh 999</p>
        </div>
        <div>
          <img src={whitesneaker} />
          <p>White high profile...<br/>ksh 1199</p>
        </div>
        <div>
          <img src={blacklady} />
          <p>Low heels ladies... <br/>ksh 525</p>
        </div>
      </div>  
    </div>
  )
}
export default HomeAccessories
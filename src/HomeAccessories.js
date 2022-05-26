import React from 'react'
import { faClose } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeAccessories=()=>{
  const blacksneaker="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/59/246303/1.jpg?7199"

  const whitesneaker="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/568724/1.jpg?6621"

  const  blacklady="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/44/055623/1.jpg?3283"

  const sportshoe="https://ke.jumia.is/unsafe/fit-in/0x0/filters:fill(white)/product/97/5024/1.jpg?4411"

  const handleClose=()=>{
    document.querySelector('.homestuff').classList.toggle('hidden')
    document.querySelector('.product-page').classList.toggle('visible')
    
  }
  const handleClick=(e)=>{
    document.querySelector('.homestuff').classList.toggle('hidden')
    document.querySelector('.product-page img').src=e
    document.querySelector('.product-page').classList.toggle('visible')
    
  }

  return (
    <div className="homestuff-wrapper">
      <h3>Footwear</h3>
      <div className="homestuff">
        <div>
          <img src={blacksneaker} width="" onClick={()=>handleClick(blacksneaker)} />
          <p>Black fashion sneakers <br/>ksh 999</p>
          <button>add to cart</button>
        </div>
        <div>
          <img src={whitesneaker} />
          <p>White high profile...<br/>ksh 1199</p>
          <button>add to cart </button>
        </div>
        <div>
          <img src={blacklady} />
          <p>Low heels ladies... <br/>ksh 525</p>
          <button>add to cart </button>
        </div>
        <div>
          <img src={sportshoe} alt=""/>
          <p>Sports fit <br/>ksh 599</p>
          <button>add to cart </button>
        </div>
        <div className="product-page">
          <FontAwesomeIcon icon={faClose} onClick={handleClose}></FontAwesomeIcon>
          <img src={whitesneaker} />
        </div>
      </div> 
     
    </div>
  )
}
export default HomeAccessories
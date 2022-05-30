import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useSt} from 'react'
import { faClose } from '@fortawesome/free-solid-svg-icons' 

import ProductPage from "./ProductPage"

const Smartphones=({count, setCount})=>{
  const [isVisible, setIsVisible]=useState(false)

  const phones=[
    {src:" https://www.telkomsel.com/sites/default/files/box_media/left/desktop/samsung_S21%2B_device.png",name:"Samsung S21",price:17000,id:1 },   
   {src:" https://androidgreek.com/wp-content/uploads/2021/05/Techno.png",name:"Camon 17",price:15000,id:2 },  
   {src:" https://1.bp.blogspot.com/-XWmUPb6yArc/X92DrUq2-gI/AAAAAAAAI2E/AeODkTL8utkua5_lJn0JdjxmAKc7e-rAwCLcBGAsYHQ/s1788/Iphone%2B12.png",name:"IPhone 12",price:21000,id:3 },  

    {src:" https://www.pakmobizone.pk/wp-content/uploads/2020/03/TECNO-Camon-15-Pro-33.png",name:"Camon 15 pro",price:12000,id:4} 

  ]
  

  const handleClick=(e)=>{
      document.querySelector('.product-page').classList.toggle('visible')
      document.querySelector('.product-page img').src=e
     document.querySelector('.smartphones ').classList.toggle('hidden')
  }
  const handleClose=()=>{
    document.querySelector('.smartphones ').classList.toggle('hidden')
    document.querySelector('.product-page').classList.toggle('visible')
     
  }
  const image="https://www.pakmobizone.pk/wp-content/uploads/2020/09/infinix-Hot-10-Ocean-Wave-5.jpg"
    

  const handleCount=()=>{
    setCount(count+1)
  }
  const handleReduce=()=>{
    setCount (count-1)
  }
  return (
    <div className="smartphones-container">
      <h3>Smartphones</h3>
      <ProductPage />
      <div className="smartphones">
        {phones.map(phone=>(
           <div>
             <img src={phone.src} onClick={()=>handleClick(phone.src) } />
             <p>{phone.name} <br/>ksh {phone.price} </p>
             <div className="count-handlers">
               <ul>
                 <li onClick ={handleReduce}>-</li>
                 <li>{count} </li>
                 <li onClick ={handleCount }>+</li>
               </ul>
             </div>
             <button onClick={handleCount}>add to cart</button>
           </div>
        ))}
        </div>
        <div className="product-page">
          <FontAwesomeIcon icon={faClose} onClick={handleClose} id="product-close"></FontAwesomeIcon>
          <img src={image} />
        </div>
    </div>
  )
}
export default Smartphones 
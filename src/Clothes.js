import React from 'react'

const Clothes=()=>{
  const images=[
    {src:"https://pngimg.com/uploads/jacket/jacket_PNG8057.png",name:"jacket"},
    {src:"https://pngimg.com/uploads/jacket/jacket_PNG8057.png", name:"dress"}
  ]
  return(
    <div className="clothes-container">
      {images.map(image=>(
         <div>
         <img src={image.src} />
         <p>{image.name}</p>
        </div>
      )) }
    </div>
  )
}
export default Clothes
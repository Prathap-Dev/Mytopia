import React from 'react'
import './product.css'
import signal from "../../img/signal.png"
import FingerPrint from "../../img/fp.png"

function Product({img,link}) {
  return (
    <div className='p'>
      <div className="p-browser-left">
        <div className="p-circle1"></div>
        <div className="p-circle2"></div>
        <div className="p-circle3"></div>
        <img src={signal} alt="" className='p-img-icon' />
      </div>
      
      <a href={link} target="_blank">
        <img src={img} alt="" className='p-img' />
      </a>
      <div className="p-browser-right">
         
         <img src={FingerPrint} alt="" className='p-img-icon2' />
       </div>
    </div>
  )
}

export default Product
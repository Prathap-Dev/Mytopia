import './productlist.css'
import React from 'react'
import Product from '../Product/Product'
import {products} from '../../data'

function Productlist() {
  return (
    <div className='p1'>
        <div className="p1-texts">
            <h1 className='p1-title'>Create & Inspire, with React</h1>
            <p className='p1-desc'>
                <span className='p1-app-name'>MR Mart</span>  is an seamless React app which brought the experience 
                of E-commerce to rural areas. It's used by hundreds of people
                and fulfil their daily needs.
                
            </p>
        </div>
        <div className="p1-list">
          {products.map((item) => (
              <Product key={item.id} img={item.img} link={item.link}/>
          ))}
            
            
        </div>
    </div>
  )
}

export default Productlist
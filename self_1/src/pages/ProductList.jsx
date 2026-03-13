import React, { useState } from 'react'
import data from '../data/product.json'
import {NavLink } from 'react-router-dom'



function ProductList() {
  let [product, setProduct] = useState(data.products);
  
  function dataChange(ct){
    if(ct === 'all'){  setProduct(data.products)  }
    else{
      setProduct(
        data.products.filter((item)=>item.category == ct)
      );
    }
  }

  return (
    <div>
      <h2>ProductList</h2>
      <div>
        <button onClick={()=>dataChange('all')}>all</button>
        <button onClick={()=>dataChange('beauty')}>beauty</button>
        <button onClick={()=>dataChange('fragrances')}>fragrances</button>
        <button onClick={()=>dataChange('furniture')}>furniture</button>
        <button onClick={()=>dataChange('groceries')}>groceries</button>
      </div>
      <ul>
        {
          product.map(function(item){                
                return <li key={item.id}>
                        <NavLink to={`/view/${item.id}`}>
                          <img src={item.thumbnail} alt="" />
                          <figcaption>
                            {item.title} / 
                            ${item.price} / 
                            남은수량 : {item.stock}
                          </figcaption>
                        </NavLink>
                      </li>
          })
        }
      </ul>
    </div>
  )
}

export default ProductList
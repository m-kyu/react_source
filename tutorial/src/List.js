//List.js
import React from 'react'

function List({item}) {

  function contrl(id){
    alert(id)
  }

  return (    
    <li onClick={function(){   contrl(item.id)   }}>
        <img src={item.photo} alt=""/>
        <p>{item.title}</p>
    </li>
    
  )
}

export default List
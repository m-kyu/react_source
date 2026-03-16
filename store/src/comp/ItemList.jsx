import React from 'react'
import Item from './Item'

function ItemList({data}) {
  return (
    <div>
        <Item data={data}/>
    </div>
  )
}

export default ItemList
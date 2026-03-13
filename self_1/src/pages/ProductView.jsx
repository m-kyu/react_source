import { useParams } from 'react-router-dom'

import data from '../data/product.json'

function ProductView() {
  //동적 id값을 useParams()로 가져와서 id와 일치하는 데이터을 찾음
  let {id} = useParams();
  let findData = data.products.find((item)=>item.id == id);
    
  return (
    <div>
        <img src={findData.images[0]} alt="" /> <br/>
        {findData.title} <br/>
        {findData.price} <br/>
        {findData.description}
    </div>
  )
}

export default ProductView
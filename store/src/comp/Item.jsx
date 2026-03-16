//Item.js
import useStore from '../store'

function Item() {

  const {data,update} = useStore();

  return (
    <div>
        {data}
        <button onClick={update}>
            변경
        </button>
    </div>
  )
}

export default Item
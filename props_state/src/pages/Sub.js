//Sub.js
import { useParams } from 'react-router-dom';
import data from "../data.json";
import List from '../comp/List';

function Sub() {
  let {type} = useParams();

  return (
    <div className='list'>
        <h2>{type} List</h2>
        <List d={data[type]}/>
    </div>
  )
}

export default Sub
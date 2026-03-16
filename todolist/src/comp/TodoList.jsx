import { useEffect, useState } from 'react';
import axios from 'axios'
import "../todolist.scss";

function TodoList({data, setData, setMode}) {

  useEffect(function(){
      axios.get("http://localhost:3001/todolist")
      .then(res=>{
        setData(res.data);
      });
  },[])

  function del(id){
    axios.delete(`http://localhost:3001/todolist/${id}`)
    .then(res=>{
        setData(data.filter(item=>item.id != id));
    });
  }

  function updateState(id, todo){
    setMode(
        {state:'update', id, todo}
    )
  }


  return (
        <ul className="list">
            {
                data.map(function(item){
                    return <li key={item.id}>
                                {item.todo}
                                <span>
                                    <button onClick={()=>updateState(item.id, item.todo)}>수정</button>
                                    <button onClick={()=>del(item.id)}>삭제</button>
                                    <button>완료</button>
                                </span>
                            </li> 
                })
            }
                       
        </ul>
  )
}

export default TodoList

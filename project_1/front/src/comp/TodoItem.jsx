import React from 'react'
import todoStore from '../Store/TodoStore'

function TodoItem({item}) {
  const {del,completeTodo} = todoStore();

  return (
    <li style={{color:item.isdone && 'red'}}>
        {item.content}
        <button>수정</button>
        <button onClick={()=>del(item._id)}>삭제</button>
        <button onClick={()=>completeTodo(item._id)}>완료</button>
    </li>
  )
}

export default TodoItem
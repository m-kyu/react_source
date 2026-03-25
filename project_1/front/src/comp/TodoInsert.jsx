import React, { useState } from 'react'
import todoStore from '../Store/TodoStore';

function TodoInsert() {
  const {save} = todoStore();
  
  const [ip,setIp] = useState('');
  function handleSubmit(e){
    e.preventDefault();

    if(!ip){
        alert('글을 작성하세요!.');
        return;
    }

    const today = new Date();
    const date = new Intl.DateTimeFormat('ko-KR',{
        year:'numeric',
        month:'2-digit',
        day:'2-digit',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'
    }).format(today).replace(/[가-힣]+/,'T').replaceAll(' ','');

    save( {content:ip, date} );
   

  }

  return (
    <div>
        <form onSubmit={e=>handleSubmit(e)}>
            <input type="text"  value={ip} onChange={e=>setIp(e.target.value)} />
            <button>추가</button>
        </form>
    </div>
  )
}

export default TodoInsert
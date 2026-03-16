import axios from 'axios'
import { useEffect, useState } from 'react';

function TodoInsert({setData,mode,setMode}) {
  let [todo, setTodo] = useState('');

  useEffect(function(){
    setTodo(mode.todo);
  },[mode])



  function insert(e){
    e.preventDefault();
    let target = e.target.content;    

    axios.post("http://localhost:3001/todolist",{todo:target.value, done:false})
    .then(res=>{
        setData(function(items){
            return [...items, res.data];
        })
    })

    target.focus();
    setTodo('');
  }

  function update(e){
    e.preventDefault();
    let target = e.target.content;    
    axios.put(
       `http://localhost:3001/todolist/${mode.id}`,
        {todo:target.value, done:false}
    )
    .then(res=>{
        setData(function(items){            
            return items.map((item)=>{
                if(item.id == mode.id) {
                    item.todo=res.data.todo
                }
                return item;
            })
        })

        setMode({state:'insert',id:'',todo:''})
        setTodo('');
    })
  }


  return (
    <div className="insert">
        {mode.state=='insert' ?
            <form onSubmit={e=>insert(e)}>
                <input type="text" name="content" 
                value={todo}
                onChange={e=>setTodo(e.target.value)}/>
                <button>저장</button>
            </form>
        :
            <form onSubmit={e=>update(e)}>
                <input 
                type="text" 
                name="content" 
                value={todo}
                onChange={e=>setTodo(e.target.value)}
                
                />
                <button>수정</button>
            </form>
        }
        
    </div>
  )
}

export default TodoInsert






    //axios.post을 이용해서 값을 저장
    //저장 후에 then으로 저장한 값을 받을수 있음
    //data변수에 저장한 값을 추가
    /* 
        [a,b] = useState();

        a => 값을 갖고 있음
        b => 값을 수정하는 함수

        a,b변수를 갖고 있을때
        ㄴ b([...a,c])

        b만 갖고 있을때
        ㄴ b(function(a){  
            [...a,c]
        }) 
    */
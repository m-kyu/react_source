import axios from 'axios'

function TodoInsert({setData}) {

  function insert(e){
    e.preventDefault();
    let target = e.target.content;    
    axios.post("http://localhost:3001/todolist",{todo:target.value, done:false})
    .then(res=>{
        setData(function(items){
            return [...items, res.data];
        })
    })
    target.value = '';
    target.focus();

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




  }

  return (
    <div className="insert">
        <form onSubmit={e=>insert(e)}>
            <input type="text" name="content"/>
            <button>저장</button>
        </form>
    </div>
  )
}

export default TodoInsert
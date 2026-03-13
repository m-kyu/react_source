import './App.css';
import axios from 'axios'

function App() {
  function get(){
    axios.get('http://localhost:3001/works')
    .then(res =>{
      console.log(res.data);    
    })
  }

  
  function del(){
    axios.delete('http://localhost:3001/works/3661')
    .then(res =>{
      console.log(res.data);    
    })
  }

  function post(){
    axios.post('http://localhost:3001/works',{"name":"차민규"})
    .then(res =>{
      console.log(res.data);    
    })
  }


  function put(){
    axios.put('http://localhost:3001/works/f66a',{name:'안정환'})
    .then(res =>{
      console.log(res.data);    
    })
  }
  put()


  return (
    <div className="App">
      <textarea defaultValue={`
        1) 모듈설치( npm  i  json-server  axios  )
         
        2) CRUD 예제(읽고,쓰고,수정,삭제)

        function get(){
          axios.get('http://localhost:3001/works')
          .then(res =>{
            console.log(res.data);    
          })
        }

        
        function del(){
          axios.delete('http://localhost:3001/works/3661')
          .then(res =>{
            console.log(res.data);    
          })
        }

        function post(){
          axios.post('http://localhost:3001/works',{"name":"차민규"})
          .then(res =>{
            console.log(res.data);    
          })
        }


        function put(){
          axios.put('http://localhost:3001/works/f66a',{name:'안정환'})
          .then(res =>{
            console.log(res.data);    
          })
        }

        `} cols="100" rows="100">
      </textarea>
    </div>
  );
}

export default App;

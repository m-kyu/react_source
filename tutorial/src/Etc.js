//Etc.js
import React, { useState } from 'react';

let intial = [
    {id:Date.now(), name:'홍길동'}
];

function Etc() {
  let [data,setData] = useState(intial);


  function saveFun(e){
      e.preventDefault();
      let value = e.target.n.value;
      setData([...data,{id:Date.now(),name:value}])
  }

  function deleteFun(id){
    setData( 
        data.filter(  (item) => item.id != id   )
    );
  }


  let [imgData, setImgData] = useState([]);

  let g = {
    save:function(e){  
        e.preventDefault();
        setImgData([...imgData, e.target.img.value]);
    },
    del:function(){  }
  };



  return (
    <div className='App'>
        <h2>Etc</h2>
        <div>
            <form onSubmit={(e)=>saveFun(e)}>
                <input type="text" name="n"/>
                <button>저장</button>
            </form>

            <ul>
                {
                    data.map(function(item){
                        return <li key={item.id}>
                                    <span>{item.name}</span>
                                    <button onClick={  ()=>{deleteFun(item.id)}  }>
                                        삭제
                                    </button>
                                </li>
                    })
                }
                
            </ul>
        </div>


        <div>
            <form onSubmit={(e)=>g.save(e)}>
                <input type="text" name="img"/>
                <button>저장</button>
            </form>
        </div>

        <ul>
            {
                imgData.map(  (item) =>
                    <li><Image url={item} /></li>
                )
            }
        </ul>
    </div>
  )}

  function Image({url}){
    let [like, setLike] = useState(0);
    return(
        <>
            <img src={url} width="100" />
            <button onClick={   ()=>setLike(like+1)  }>
                {like}
            </button>
        </>
    );
  }




export default Etc


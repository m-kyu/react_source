//State.js
import React, { useState } from 'react'

function State() {
    let [num, setNum] = useState(10);
    let [data, setData] = useState([]);

    function incre(){
        setNum(num+1);
    }

    function nameList(e){
        e.preventDefault();
        let value = e.target.name.value;
        setData([...data, value]);
    }
    
    console.log(data);
    
    return (
        <div className="App">
            <h2>State</h2>
            <button onClick={incre}>{num}</button>

            <article>
                <h3>502호 강의실 수강생</h3>
                <div>
                    <form onSubmit={   (e)=>{nameList(e)}   }>
                        <input type="text" name="name"/>
                        <button>추가</button>
                    </form>
                </div>
                <ul>
                    {
                        data.map(function(item,i){
                            return <li key={i}>  {item}  </li>;
                        })
                    }
                </ul>
            </article>
        </div>


    )
}

export default State
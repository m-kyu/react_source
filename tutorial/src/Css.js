//Css.js
import { useState } from "react";
import "./css/style.scss";

function Css() {
  let [active, setActive] = useState(true);


  return (
    <div className="App">
        <h2>SCSS</h2>
        <div className="color-blue">
            1) npm i sass (모듈설치)<br/>
            2) import "파일명.scss";
        </div>

        <h2>STYLE</h2>
        <div style={  {color:'red', fontSize:'20px'}  }>
            1) style코딩은  스크립트 객체 형태로 작성 <br/>
            <textarea cols="100" defaultValue={`style={  {color:'red', fontSize:'20px'}  }`}>               
            </textarea>
        </div>

        <h2>class 제어</h2>
        <button className="active" onClick={function(e){
            e.target.classList.remove('active');
        }}>
            활성화
        </button>
        

        <button className={active ? 'active' : ''} onClick={function(e){
            setActive(!active);
        }}>
            활성화
        </button>

        <div style={{display: active ? 'block' : 'none'}}>
            팝업창
        </div>



    </div>
  )
}

export default Css
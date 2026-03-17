import logo from './logo.svg';
import './App.css';
import TextFieldBox from './comp/TextField';
import HalfRating from './comp/HalfRating';
import { useState } from 'react';
import Slide from './comp/Slide';
import Tailwind from './comp/Tailwind';
import FramaMotion from './comp/FramaMotion';
import DaumPost from './comp/DaumPost';
import ReactCalender from './comp/ReactCalender';

function App() {
  let [form, setForm] = useState({})

  function save(name,value){
    setForm({...form, [name]:value})
  }

  return (
    <div className="App" style={{textAlign:'center'}}>
      <article>
          <h2>MUI</h2>
          <ul>
            <li><TextFieldBox label="아이디" save={save}/></li>
            <li><TextFieldBox label="패스워드" save={save}/></li>
            <li style={{display:'flex',justifyContent:'center'}}>
              <HalfRating />
            </li>
          </ul>
      </article>

      <article>
        <h2>Swiper</h2>
        <Slide/>
      </article>

      <article>
        <h2>Tailwindcss</h2>
        <Tailwind />
      </article>


      <article>
        <h2>Motion</h2>
        <FramaMotion />
      </article>

      <article>
        <h2>Post Code</h2>
        <DaumPost />
      </article>

      <article>
        <h2>달력</h2>
        <ReactCalender />
      </article>






    {
      /* 
      css(부모가 자손을 중앙 정렬) 
      => text-align:center; (inline, inline-block)
      => flex, grid (block, flex)
      */
    }



    </div>
  );
}

export default App;

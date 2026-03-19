import React,{ useState } from 'react'

function App() {
  const [isActive, setIsActive] = useState('');
  return (
    <>
        <button onClick={()=>setIsActive('active')} >입금</button>
        <button>출금</button>

        <List/>

        <Popup isActive={isActive} setIsActive={setIsActive}/>
    </>
  )
}

function Popup({isActive, setIsActive}){
   
   return(
    <div  className={`popup ${isActive}`}
        onClick={(e)=>{
          if( e.target.classList.contains('popup') ){
              setIsActive('') 
          }


            //e.target.classList.contains('insert') && popState[1](false)
        }}
    >
        팝업내용
        <button onClick={function(){ setIsActive('')  }}>입금</button>
    </div>
   )
}


export default aaa
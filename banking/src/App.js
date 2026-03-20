
import { useState } from 'react';
import './bangking.scss';
import BankInsert from './comp/BankInsert';
import BankList from './comp/BankList';
import bankStore from './store/bankStore';

function App() {
  const [type,setType] = useState('입금');
  const [isPOP, setIsPOP] = useState('');
  const {total} = bankStore();

  function openPop(t){
    setType(t);
    setIsPOP(true);
  }
  return (
    <div className="bank">
      <header> <h2>입출금 내역</h2> </header>

      <div className="total-balance">
        Total Balance
        <p><b>{total.toLocaleString('ko-KR')}</b>원</p>
        <p>
          <button className='bg-yellow' onClick={e=>openPop('입금')}>입금</button>
          <button onClick={e=>openPop('출금')}>출금</button>
        </p>
      </div>

      <div className="sort">
        <button>Date</button>
        <button>In/Out</button>
      </div>

      <BankList />
      <BankInsert type={type} popState={[isPOP,setIsPOP]}/>
      
    </div>
  );
}

export default App;


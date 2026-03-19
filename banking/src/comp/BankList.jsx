import React from 'react';
import bankStore from '../store/bankStore';

function BankList() {
  const {data} = bankStore();

  if(!data.length) 
  return <div className="empty">입력된 내용이 없습니다.</div>

  return (
    <div className="banking-list">
        <ul>
        {
            data.map((item)=>
            
                <li key={item.id}>
                    <div>
                        <span className='month'>{item.month}</span>
                        <span>{item.date}</span>
                    </div>
                    <div>
                    <p><span>Status</span><span className='red'>{item.type}</span></p>
                    <p><span>Amount</span><span className='blue'>{item.amount}</span></p>
                    </div>
                    <div><span>message</span><span className='w75'>{item.message}</span></div>
                </li>
            )
        }
          {/* <li>
            <div>
              <span className='month'>March</span>
              <span>2026.03.19</span>
            </div>
            <div>
              <p><span>Status</span><span className='red'>출금</span></p>
              <p><span>Amount</span><span className='blue'>5,200</span></p>
            </div>
            <div><span>message</span><span className='w75'>강남역 커피빈</span></div>
          </li> */}
          
        </ul>
      </div>
  )
}

export default BankList
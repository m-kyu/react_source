// ReactCalender.jsx
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function ReactCalender() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar 
      onChange={e=>onChange(e)} 
      value={value} 
      locale="en-US"/>
    </div>
  )
}

export default ReactCalender
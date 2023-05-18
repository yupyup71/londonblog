import React, {useState} from 'react';
import Calendar from 'react-calendar';
import styles from './calendar.module.css';

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar style={{styles}} onChange={onChange} value={value} locale='en'/>
    </div>
  );
}

export default MyApp;
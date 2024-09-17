import React, { useState } from 'react';
import "../style/style.css";
function Counter({ id, onDelete }) {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('yellow'); 

  const handleIncrement = () => {
    setCount(count + 1);
    setBgColor('lightblue'); 
  };

  const Reset = () => {
    setCount(0);
    setBgColor('yellow'); 
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <span id='count' style={{ backgroundColor: bgColor, padding: '10px' }}>
        {count === 0 ? "Zero" : count}
      </span>

      <button className='btn1' onClick={handleIncrement} style={{ marginLeft: '10px' }}>Increment</button>
      <button className='btn2' onClick={Reset} style={{ marginLeft: '10px' }}>Reset</button>
      <button className='btn3' onClick={() => onDelete(id)} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>Delete</button>
    </div>
  );
}

function App() {
  const [counters, setCounters] = useState([0, 1, 2, 3]);

  const handleDelete = (id) => {
    setCounters(counters.filter(counterId => counterId !== id));
  };

  return (
    <div>
     
      {counters.map((counterId) => (
        <Counter key={counterId} id={counterId} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;

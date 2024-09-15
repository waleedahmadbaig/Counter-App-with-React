import React, { useState } from 'react';
import "../style/style.css";

// Reusable Counter Component
function Counter({ id, onDelete }) {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('yellow'); // Default color

  // Function to handle button click and increment the count
  const handleIncrement = () => {
    setCount(count + 1);
    setBgColor('lightblue'); // Change background color on increment
  };

  // Function to handle reset button click
  const Reset = () => {
    setCount(0);
    setBgColor('yellow'); // Reset background color to default
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      {/* Display count with dynamic background color */}
      <span id='count' style={{ backgroundColor: bgColor, padding: '10px' }}>
        {count === 0 ? "Zero" : count}
      </span>

      {/* Buttons for Increment, Reset, and Delete */}
      <button className='btn1' onClick={handleIncrement} style={{ marginLeft: '10px' }}>Increment</button>
      <button className='btn2' onClick={Reset} style={{ marginLeft: '10px' }}>Reset</button>
      <button className='btn3' onClick={() => onDelete(id)} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>Delete</button>
    </div>
  );
}

// Main App component
function App() {
  const [counters, setCounters] = useState([0, 1, 2, 3]); // Initially four counters

  // Function to handle deletion of a counter
  const handleDelete = (id) => {
    setCounters(counters.filter(counterId => counterId !== id));
  };

  return (
    <div>
      {/* Render each counter */}
      {counters.map((counterId) => (
        <Counter key={counterId} id={counterId} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;

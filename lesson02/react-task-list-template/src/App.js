import React, { useState } from 'react';

function App() {
  // This is your task state
  const [ data, setData ] = useState([
    { task: 'Do laundry', done: false },
    { task: 'Clean bedroom', done: true },
    { task: 'Bake cake', done: true }
  ]);

  // TODO: Use a "for loop" and put each task inside <li></li>, then put each <li></li> inside this array.
  const array = [];

  return (
    <>
      <h2>Task List</h2>
      <ul>
        {/* The array of <li> elements are rendered here: */}
        {array} 
      </ul>
    </>
  )
}

export default App;

import React, { useState, useEffect } from 'react';

function ExampleEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => { // Update browser title
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Title clicker
      </button>
    </div>
  );
}

export default ExampleEffect;

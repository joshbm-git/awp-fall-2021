import React, { useState } from "react";

function ButtonExample(props) {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      onClick={(event) => {
        setCount(count + 1);
      }}>
      {count === 0
        ? "I dare you to click me!"
        : `This button has been clicked ${count} times`}
    </button>
  );
}

export default ButtonExample;

import React, { useState } from "react";

function InputTextExample(props) {
  const [input, setInput] = useState("");

  return (
    <div>
      <input onChange={(event) => setInput(event.target.value)} type="text" />
      <p>The contents of the input field: {input}</p>
    </div>
  );
}

export default InputTextExample;

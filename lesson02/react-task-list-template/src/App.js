import React, { useState } from "react";

function App() {
  // This is your task state
  const [data, setData] = useState([
    { task: "Do laundry", done: false },
    { task: "Clean bedroom", done: true },
    { task: "Bake cake", done: true },
  ]);

  return (
    <>
      <h2>Task List</h2>
      <ul>
        {/* TODO: Map over the `data` array to render the items as <li>'s here */}
      </ul>
    </>
  );
}

export default App;

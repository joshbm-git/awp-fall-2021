import React, { useState }  from "react";
import TaskList from "./TaskList";


function App() {
  // This is your task state
const [data, setData] = useState([
  { task: "Do laundry", done: false },
  { task: "Clean bedroom", done: true },
  { task: "Bake cake", done: true },
]);

return(
  <main>
    <h2>TaskList</h2>
    <TaskList/>
  </main>
);


}

export default App;
